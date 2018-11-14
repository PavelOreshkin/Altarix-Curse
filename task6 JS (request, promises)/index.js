const getUsersApi = (name) => {
  return fetch(`https://api.github.com/search/users?q=${name}`)
    .then(res => {
      return res.json();
    })
}

const enter = (event) => {
  if (event.key === 'Enter') {
    getUsers()
      .then(res => {
        if (res.items) {
          setTimeout(() => {
            alert('Все получилось!)')
          }, 2000);
        }
      })
  }
}

const getUsers = () => {
  const name = document.getElementById('textInput').value;
  return getUsersApi(name)
    .then(res => {
      if (res.items.length !== 0) {
        document.getElementById('root').innerHTML = res.items.slice(0, 5).map(item =>
          `<div class="resultUser">
            <img src="${(item.avatar_url) ? item.avatar_url : '#'}" alt="avatar" class="resultUser__avatar" />
            <div class="resultUser__content">
              <h1 class="resultUser__login">${(item.login) ? item.login : ''}</h1>
              <a class="searchPanel__searchButton" target="_blank" href="${(item.html_url) ? item.html_url : ''}">Открыть репозиторий</a>
            </div>          
          </div>`).join('');
      } else {
        document.getElementById('root').innerHTML = '';
        alert('Пользователь с таким именем не найден');
      }
      return res
    })
    .catch(err => alert('Неизвестная ошибка обратитесь к администратору'))
}