const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
    
    // const promise = new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.setRequestHeader('Content-Type', 'application/json');

    //     xhr.open(method, url);

    //     xhr.responseType = 'json';

    //     xhr.onload = function() {
    //         if (xhr.status >= 200 && xhr.status < 300) {
    //             resolve(xhr.response);
    //             //console.log(xhr.response);
    //         } else {
    //             xhr.response;
    //             reject(new Error('Something went wrong!'));
    //         }               
    //         // const listOfPosts = JSON.parse(xhr.response);
    //         // console.log(listOfPosts);
    //     };

    //     xhr.onerror = function() {
    //         console.log(xhr.response);
    //         console.log(xhr.status);
    //         reject(new Error('Failed to send request!'));
    //     };

    //     xhr.send(JSON.stringify(data));
    // });

    // return promise;
    return fetch(url, {
        method: method,
        //body: JSON.stringify(data),
        body: data,
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server-side.');
            });
        }
    })
    .catch(error => {
        console.log(error);
        throw new Error('Something went wrong!');
    });
}

// async function fetchPosts() {
//     try {
//     const responseData = await sendHttpRequest(
//         'GET',
//         'https://jsonplaceholder.typicode.com/posts'
//     );
//     const listOfPosts = responseData;
//     for (const post of listOfPosts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector('h2').textContent = post.title.toUpperCase();
//         postEl.querySelector('p').textContent = post.body;
//         postEl.querySelector('li').id = post.id;
//         listElement.append(postEl);
//     }
//     } catch (error) {
//         alert(error.message);
//     }
// };

async function fetchPosts() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(response);
      const listOfPosts = response.data;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.response);
    }
  }

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    const fd = new FormData(form);
    // fd.append('title', title);
    // fd.append('body', content);
    fd.append('userId', userId);
  
    //sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
    //sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',fd);
    console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        //console.log('Clicked on Button');
        const postId = event.target.closest('li').id;
        //console.log(postId);
        //sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
  });
  
    




   
  
  