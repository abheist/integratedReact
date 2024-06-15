# Django integration with react

This repo demonstrate the setup for integrating React with Django for client-side rendering. Instead of saperating django and react app. React can sit on each django template and esbuild will out the module file for each django teamplte based on components used. It uses multiple Django templates to load different JavaScript files for each URL.

- Multiple Templates for Different Pages: Use separate HTML templates to serve different React components.
- Dynamic JavaScript Loading: Load specific React components for each page.
- Modern JavaScript Bundling: Use esbuild for efficient bundling of React components.
- Simple and Scalable: Easy to extend with new pages and components.

```sh
customproject/
|-- customapp/
|   |-- templates/
|   |   |-- customapp/
|   |       |-- base.html
|   |       |-- index.html
|   |       |-- about.html
|   |       |-- contact.html
|   |-- static/
|   |   |-- dist/
|   |       |-- index.js
|   |       |-- about.js
|   |       |-- contact.js
|   |-- views.py
|   |-- urls.py
|-- manage.py
|-- package.json
|-- babel.config.js
|-- esbuild.config.js
```


### Prerequisites
Python 3.x
Node.js
npm


### Setup Instructions
1. Clone the Repository
2. Install Python Dependencies
3. Set up a virtual environment and install Django.
4. Install npm packages
5. run django server and npm start

### Contributing
Feel free to contribute to this project by submitting issues or pull requests. Much more can be done on this:
- Server Side Rendering
- Hot Module Reloading
- TypeScript inclusion
- Testing
- Production optimization
- How Auth flow will work in coordination

### License
This project is licensed under the MIT License.

