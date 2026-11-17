async function getData() {

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxtK5tp7oGYCQX2oVgr8a8JITmdfaCepudChP1hIQLcntHfPkNVLtwhVaIYkxBTh4hY/exec"
    );

    const data = await response.json();

    console.log(data);

}
