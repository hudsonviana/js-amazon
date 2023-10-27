export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

export const rerender = async (component) => {
  document.querySelector('#main-container').innerHTML = await component.render();
  await component.after_render();
};

export const showLoading = () => {
  document.querySelector('#loading-overlay').classList.add('active');
};

export const hideLoading = () => {
  document.querySelector('#loading-overlay').classList.remove('active');
};

export const showMessage = (message, callback) => {
  document.querySelector('#message-overlay').innerHTML = `
  <div>
    <div class="message-overlay-content">${message}</div>
    <button id="message-overlay-close-button">OK</button>
  </div>`;

  document.querySelector('#message-overlay').classList.add('active');
  document.querySelector('#message-overlay-close-button').addEventListener('click', () => {
    document.querySelector('#message-overlay').classList.remove('active');
    if (callback) {
      callback();
    }
  });
};
