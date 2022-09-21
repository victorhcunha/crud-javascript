//getAll
function getSiteDocument() {
  fetch(
    "http://localhost:8080/o/headless-delivery/v1.0/sites/20122/documents",
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa("test@liferay.com:teste"),
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.items);
    });
}

//getByID
function getDocument(id) {
  fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa("test@liferay.com:teste"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

//delete
function deleteDocument(id) {
  fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Basic " + btoa("test@liferay.com:teste"),
    },
  }).then((res) => console.log(res));
}

//post
function postDocument() {
  const file = document.querySelector('input[type="file"]');
  let data = new FormData();
  data.append("file", file.files[0]);

  fetch(
    "http://localhost:8080/o/headless-delivery/v1.0/sites/20122/documents",
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa("test@liferay.com:teste"),
      },
      body: data,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
