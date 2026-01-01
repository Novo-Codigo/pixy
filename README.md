# Pixy

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

### About

Pixy is a gamified financial manager for both people and business.

### Project Roadmap

The project is yet in development. See the roadmap below:

- [ ]  Phase 1
    - [X]  1.1
        - [X]  Create Logo
        - [X]  Create minimal landing page
        - [X]  Deploy on vercel
    - [ ]  1.2
        - [ ]  Create responsive pages
            - [X]  Main page
                - [X]  Create a dashboard to display mocked financial data
                - [X]  Define mocked data
            - [X]  User page
                - [X]  Define mocked user and it's data
            - [X]  Setup
                - [X]  Define mocked data
            - [ ]  Ranking
                - [ ] Define mocked user and it's data
                - [ ] Define ranking system
            - [X]  About
- [ ]  Phase 2
- [ ]  Phase 3
- [ ]  Phase 4

## 💻 Prerequisites

Before starting, check if you have the latest versions of Node and Python.

## 🚀 Installing Pixy

To install Pixy, Follow these steps:

```
git clone git@github.com:Novo-Codigo/pixy.git
cd pixy
```

Frontend:
```
cd frontend
npm i
```

Api:
```
cd api
python3 -m venv venv
```


|| Linux & macOS:

```
source venv/bin/activate
python3 -m pip install -r requirements.txt
```

|| Windows:
```
venv\Scripts\activate
pip install -r requirements.txt
```

## ☕ Using Pixy

In order to use Pixy, follow these steps:

1 Open 2 terminals. One for the API and another for the website:

- In the first terminal, go to ```pixy/api/pixy/``` after creating and activating the virtual environment, and then type and execute the following command:
    - Linux & MacOS: ```python3 manage.py runserver```
    - Windows: ```py manage.py runserver```

- In the second terminal, go to ```pixy/frontend/``` and type and execute the following command:
    - ```npm run dev```

The project will be avaliable on ```http://localhost:5173```

## 📝 License

⚠️ **IMPORTANT**

This project is under license. See the [LICENSE](LICENSE.md) file for more details.
