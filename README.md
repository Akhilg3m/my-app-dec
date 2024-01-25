
Angular: Angular is framework to build single page application(SPA).
--------


        Framework: combination of languages and libraries
        ----------

            HTML
            CSS
            TypeScript
            Rxjs
            Zone.js


Angular Project Setup:
----------------------

1) Download and install node.js

    Check:
    ------
        node -v
        npm -v

2) Install angular

    npm install -g @angular/cli@15

    check:  ng version
    ------

3) Create new projecct

    ng new my-app

4) start the server

    ng serve



Powershell permissions to VSCODE:
--------------------------------

1) Open powershell as a administrator

2) run

    set-executionpolicy unrestricted


Angular Concepts:
----------------



Routing: Angular is SPA, Routing helps us to navigate from one view to another view.
--------


    Process:
    --------
    1) Create path in app-routing.module.ts, in routes array.
    2) Mention <router-outlet> to load the router output.


    4 types of routes:
    ------------------

        1) General Route:
        -----------------
            {path:'login', component: LoginCompoent}

        2) Children Route:
        ------------------
            {path:'dashboard', component:DashboardComponent, childrend:[
                {path:'home', ...},
                {path:'about', ...}
            ]}

        3) Empty Route:
        ---------------
            {path:'', component: LoginComponent}

        4) Fallback Route/ Wildcard route:
        ----------------------------------
            {path:'**', component: PagenotfoundComponent}


    Naviagation from view:
    ----------------------

        1) From HTML:
        --------------

            <button routerLink="/login">


        2) From TS:
        -----------


Angular Architecture:
---------------------



GIT Setup:
----------

1) Link laptop to website
-------------------------

    git config --global user.name "XXXXX"
    git config --global user.email "XXXXXX"


2) Link project folder with github repository
---------------------------------------------

    git init    
    git remote add origin URL

3) Upload the code
------------------

    git add .
    git commit -m "XXXXXX"
    git push




















