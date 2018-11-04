const getUsersApi = (name) => {
  return fetch(`https://api.github.com/search/users?q=${name}`)
    .then(res => {
      return res.json();
    })
}

const enter = (event) => {
  if (event.key === 'Enter') {
    getUsers()
  }
}

const getUsers = () => {
  const name = document.getElementById('textInput').value;
  getUsersApi(name)
    .then(res => {
      if (res.items.length !== 0) {
        document.getElementById('root').innerHTML = '';
        const fiveUser = res.items.slice(0, 5);
        fiveUser.forEach((item, index) => {
          document.getElementById('root').innerHTML += `
          <div class="resultUser">
            <img src="${item.avatar_url}" alt="avatar" class="resultUser__avatar" />
            <div class="resultUser__content">
              <h1 class="resultUser__login">${item.login}</h1>
              <a class="searchPanel__searchButton" target="_blank" href="${item.html_url}">Открыть репозиторий</a>
            </div>          
          </div>`;
        })
      } else {
        alert('Пользователь с таким именем не найден');
      }
    })
    .catch(err => alert('Неизвестная ошибка обратитесь к администратору'))
}