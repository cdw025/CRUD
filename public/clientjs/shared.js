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

  function getEditTripFromForm() {
    const id = $('#eid').val();
    const tripnumber = $('#etripNumberInput').val();
    const tripname = $('#etripNameInput').val();
    const airdraft = $('#eairDraftInput').val();
    const moblocation = $('#emobLocInput').val();
    const loadlocation = $('#eloadLocInput').val();
    const unloadlocation = $('#eunloadLocInput').val();
    const customer = $('#ecompanyInput').val();
    const customerfirstname = $('#ecustomerFirstNameInput').val();
    const customerlastname = $('#ecustomerLastNameInput').val();
    const customerphone = $('#ecustomerPhoneInput').val();
    const customeremail = $('#ecustomerEmailInput').val();
    const barge1 = $('#ebarge1Input').val();
    const barge2 = $('#ebarge2Input').val();
    const tug1 = $('#etug1Input').val();
    const tug2 = $('#etug2Input').val();
    const tug3 = $('#etug3Input').val();
    



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

  // function logout() {
  //   localStorage.removeItem('user_id');
  //   $.get()

  // }
  