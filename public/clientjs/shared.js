const API_URL = getHostURL();
const AUTH_URL = `${API_URL}/auth`;

function getHostURL() {
    if (window.location.host.indexOf('localhost') != -1) {
      return 'http://localhost:3000';
    } else {
      return 'https://sticker-mania.herokuapp.com';
    }
  }

  function getUserFromForm() {
    const email = $('#email').val();
        const password = $('#password').val();

        const user = {
            email,
            password
        };

        return user;
  }

  function showErrorMessage(message) {
    const $errorMessage = $('#errorMessage');
    $errorMessage.text(message);
    $errorMessage.show();
  }

  function getNewTripFromForm() {
    const tripnumber = $('#tripNumberInput').val();
    const tripname = $('#tripNameInput').val();
    const airdraft = $('#airDraftInput').val();
    const moblocation = $('#mobLocInput').val();
    const loadlocation = $('#loadLocInput').val();
    const unloadlocation = $('#unloadLocInput').val();
    const customer = $('#companyInput').val();
    const customerfirstname = $('#customerFirstNameInput').val();
    const customerlastname = $('#customerLastNameInput').val();
    const customerphone = $('#customerPhoneInput').val();
    const customeremail = $('#customerEmailInput').val();
    const barge1 = $('#barge1Input').val();
    const barge2 = $('#barge2Input').val();
    const tug1 = $('#tug1Input').val();
    const tug2 = $('#tug2Input').val();
    const tug3 = $('#tug3Input').val();
    
 const trip = {
            tripnumber,
            tripname,
            airdraft,
            moblocation,
            loadlocation,
            unloadlocation,
            customer,
            customerfirstname,
            customerlastname,
            customerphone,
            customeremail,
            barge1,
            barge2,
            tug1,
            tug2,
            tug3
        };

        return trip;
  }

  function getEditTripFromForm(form) {
    const id = form.find('input[id=eid]').val();
    const tripnumber = form.find('input[id=etripNumberInput]').val();
    const tripname = form.find('input[id=etripNameInput]').val();
    const airdraft = form.find('input[id=eairDraftInput]').val();
    const moblocation = form.find('input[id=emobLocInput]').val();
    const loadlocation = form.find('input[id=eloadLocInput]').val();
    const unloadlocation = form.find('input[id=eunloadLocInput]').val();
    const customer = form.find('input[id=ecompanyInput]').val();
    const customerfirstname = form.find('input[id=ecustomerFirstNameInput]').val();
    const customerlastname = form.find('input[id=ecustomerLastNameInput]').val();
    const customerphone = form.find('input[id=ecustomerPhoneInput]').val();
    const customeremail = form.find('input[id=ecustomerEmailInput]').val();
    const barge1 = form.find('input[id=ebarge1Input]').val();
    const barge2 = form.find('input[id=ebarge2Input]').val();
    const tug1 = form.find('input[id=etug1Input]').val();
    const tug2 = form.find('input[id=etug2Input]').val();
    const tug3 = form.find('input[id=etug3Input]').val();

        const trip = {
            id,
            tripnumber,
            tripname,
            airdraft,
            moblocation,
            loadlocation,
            unloadlocation,
            customer,
            customerfirstname,
            customerlastname,
            customerphone,
            customeremail,
            barge1,
            barge2,
            tug1,
            tug2,
            tug3
        };
        return trip;
    }
  