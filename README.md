
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

0) -> download and install git software
   -> create account in github website

1) Link laptop to website: (laptop<->website)
--------------------------

    git config --global user.name "XXXXX"
    git config --global user.email "XXXXXX"

2) Link project folder with github repository:  (project<->repository)
----------------------------------------------

    git init    
    git remote add origin URL

3) Upload the code: (Process)
-------------------

    git add .
    git commit -m "XXXXXX"
    git push


1) Employee table

    SNO       Name      Company      Experience      Package        Working Employee    

    1         a          TCS            4             1100000            true             


    1) Show SNO
    2) Implment delete activity
    3) experience low to high
       experience high to low
       Package low to high
       Package high to low
    4) add 20% hike
       50000 bonus
    5) junior developers (below 5 years exp)
       senior developers (above 5 years exp)
    6) Total CTC
    7) Total employees


API Integration:
----------------

1) import HttpClientModule.

2) Inject HttpClient service in VehicleService

3) Getusers method

4) inject vehicleService in Vehicle component
   listen to data


ALL possible API calls:
=======================

1) all          get              get(url)

2) specific     get              get(url/id)

3) filtering    get              get(url?filter=XXXX)

4) sorting      get              get(url?sortBy=XXXX, order=XXXX)

5) paginarion   get              get(url?limit=10&page=1)

6) create       post             post(url,data)

7) update       put              put(url/id,data)

8) delete       delete           delete(url/id)



Forms:
======
1) FormGroup
2) Nested FormGroup
3) FormArray
4) Dynamic Forms
5) Form Validations
6) Custom Validator





























