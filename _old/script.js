const gitMailerPostUrl = 'https://script.google.com/macros/s/AKfycbxMsMRwKsyBH7Ps6cKmsIqev_zsBxQZwezKE-OKuRXYfQQNv56QlJVLIVTZk9KN2xWH3w/exec';
const gitForm = document.querySelector('#getInTouch');
const gitFormName = document.querySelector('#name');
const gitFormEmail = document.querySelector('#email');
const gitFormNumber = document.querySelector('#number');
const gitFormMessage = document.querySelector('#message');
const gitFormMsgErrDiv = document.querySelector('.git-form-msg-err');

gitForm.addEventListener('submit', submitter);

function submitter(thisEvent) {
    // this prevent the submit button to send the form to the endpoint URL.
    thisEvent.preventDefault();

    let gitMessageErr = '';

    if(gitFormName.value.length < 5) {
        if(gitMessageErr == '') {
            gitMessageErr += `<br /><small><strong>Error message:</strong></small>`;
        }
        gitMessageErr += `<br /><small>* Name needs to be at least 5 characters long.</small>`;
        gitFormName.style.borderColor = 'red';
    }
    if(gitFormEmail.value.length < 10) {
        if(gitMessageErr == '') {
            gitMessageErr += `<br /><small><strong>Error message:</strong></small>`;
        }
        gitMessageErr += `<br /><small>* E-mail needs to be at least 10 characters long.</small>`;
        gitFormEmail.style.borderColor = 'red';
    }
    if(gitFormNumber.value.length < 7) {
        if(gitMessageErr == '') {
            gitMessageErr += `<br /><small><strong>Error message:</strong></small>`;
        }
        gitMessageErr += `<br /><small>* Number needs to be at least 7 digits long.</small>`;
        gitFormNumber.style.borderColor = 'red';
    }
    if(gitFormMessage.value.length < 5) {
        if(gitMessageErr == '') {
            gitMessageErr += `<br /><small><strong>Error message:</strong></small>`;
        }
        gitMessageErr += `<br /><small>* Message needs to be at least 5 characters long.</small>`;
        gitFormMessage.style.borderColor = 'red';
    }

    if(gitMessageErr) {
        gitFormMsgErrDiv.innerHTML = gitMessageErr;
        gitFormMsgErrDiv.style.color = 'red';
        // this will clear the .git-form-msg-err div after 2k miliseconds or 2 seconds.
        setTimeout(()=> {
            clearFormBorder();
        },2000);
    } else {
        clearFormBorder();
        const gitObj = {
            name: gitFormName.value,
            email: gitFormEmail.value,
            number: gitFormNumber.value,
            message: gitFormMessage.value
        }
        gitMailPost(gitObj);
    }
}

function clearForm() {
    gitFormMsgErrDiv.innerHTML = '';
    gitFormName.value = '';
    gitFormEmail.value = '';
    gitFormNumber.value = '';
    gitFormMessage.value = '';
}
function clearFormBorder() {
    gitFormMsgErrDiv.innerHTML = '';
    gitFormName.style.borderColor = '';
    gitFormEmail.style.borderColor = '';
    gitFormNumber.style.borderColor = '';
    gitFormMessage.style.borderColor = '';
}

function gitMailPost(data) {
    console.log(data);
    fetch(gitMailerPostUrl,{
        method: 'POST',
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        checkJsonResult(json);    
    })
}
function checkJsonResult(jsonData) {
    let saveJson = jsonData;

    if ( saveJson.status == 'success' ) {
        clearFormBorder();
        const msgModal = document.querySelector('#msg-modal');
        msgModal.classList.add(`msg-modal`);
        msgModal.classList.add(`flex-column-centered`);
        msgModal.classList.add(`flex-text-center`);
        msgModal.innerHTML = `
            <h3>Message sent successfully!</h3><br />
            <h4>Please check your inbox, including your spam or junk folders, to ensure that you have received it.</h4><br />
            <p><small>If you have any further questions or concerns, please don't hesitate to reach out.</small></p>
        `;

        // wait for five seconds to exit modal.
        setTimeout(()=> {
            document.removeEventListener('click', document);
            document.removeEventListener('keydown', keyPressed);
            location.reload();
        },5000);

        // when mouse click, then reload page.
        document.addEventListener('click', () => {
                document.removeEventListener('click', document);
                document.removeEventListener('keydown', keyPressed);
                location.reload();
        });

        // if key pressed, then reload page.
        let keyPressed = document.addEventListener('keydown', pressedKey);
        function pressedKey(keyPressed){
            switch (keyPressed.code) {
                default:
                    document.removeEventListener('click', document);
                    document.removeEventListener('keydown', keyPressed);
                    location.reload();
                    break;
            }
        }
    }

}