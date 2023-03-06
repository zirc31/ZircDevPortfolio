//
const url = '';
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
            clearForm();
        },2000);
    } else {
        clearForm();
        console.log(`Form submitted successfully!`);
    }

    function clearForm() {
        gitFormMsgErrDiv.innerHTML = '';
        gitFormName.style.borderColor = '';
        gitFormEmail.style.borderColor = '';
        gitFormNumber.style.borderColor = '';
        gitFormMessage.style.borderColor = '';
    }

    console.log(gitFormName);
    console.log(gitFormName.value.length);
    console.log(gitFormMsgErrDiv);
    console.log(gitMessageErr);

    
}