#React

[https://react.dev/learn/react-developer-tools]
______________________________________________

1. Create a folder

2. Access it

3. Open an Editor (VSC, in my case)

4. Open a terminal, leave it open, and run the command **npx create-react-app project_name** and follow the instructions

5. **Access the project folder from the terminal** included in the folder created earlier

6. npm i

7. Open a terminal, which we will leave open, and make sure you are in the React project folder you are working on, and run the command:

**npm run start** ***or*** **npm start**

8. Go to src and open the **App.js** file and make a modification, which will be visible in the browser in the previously opened window by running the command at step 5.

9. We will always work through the **src** folder and the files contained in it. We can also modify the **index.html** file in public, ***but it is through the file with the same name - index.html - present in src that we directly affect what we see in the browser through the file in public*** (public is related to what we see on the client side, as in Laravel).

10. Install the VSC extension called ES7+ React/Redux/React-Native snippets by dsznajder to have React shortcuts.

11. Create a **components** folder in src

12. In the new components folder, **create a JS file** for a component (for example, component_1.js) - **component names in React must always start with an uppercase letter!**

***Keep in mind that when we initially ran the command npx create-react-app project_name, we technically created a component, which in that case is the App.js file found in src.***


13. **Open** the newly created component, the **Component_1.js** file, and, using one of the shortcuts allowed by the previously downloaded extension, write:

**rafce**

***rafce is a shortcut that creates an arrow function.***

Or, write:

**rfce**

***rfce creates a method without an arrow function syntax.***


14. In **App.js**, import the component created above using ES6 syntax:

**import component_1 from './components/Component_1';**

**Every component must always return something, and it cannot return more than one dynamically created HTML element at a time. So, if, for example, we want to return an <h1> and an <h2>, either wrap them in a <div> element, which will be identified as a single element; or, we have two options:**


**a) <> element content </>**

**b) <React.Fragment>element content</React.Fragment>**


**The return statement must always be followed by parentheses that enclose the returned element. If these parentheses are not present, the opening HTML tag must necessarily be on the same line as the return statement.**

***These HTML tags are actually JSX tags, i.e., JavaScript for React, and unlike "pure" HTML tags, they must always (!) be closed.***


16. **To nest multiple subcomponents within a primary component: declare different subcomponents (functions that return subelements) and then, in the return statement of the primary component, invoke them as JSX tags.**

17. The **index.css** file found in **src** is also linked to the **index.html** file found in **public**: therefore, we will work on that CSS for style changes.
______________________________________________

**Creating a Card Component:**


18. Create a component for the card (in our case, **"Products.js"**).

19. [Not necessary but required if you want to use the <React.Fragment></React.Fragment> syntax] **Import React in "App.js" with import React from 'react';**

20. **Insert Bootstrap's JavaScript and CSS CDNs respectively into the body and head of the "index.html" file located in the "public" folder.**

21. In our component's "Products" function, return the Bootstrap card.

***Remember that, while working in JSX, you need to ensure that each tag is closed properly, and when it comes to classes, unlike in JavaScript, you should use "className" instead of "class."***

22. In "App.js," import your component.

23. **In the return statement of the "App.js" function, embed your imported component:**

***at this point, since you have more than one component embedded in the return statement of the function, you must enclose everything in a fragment, using one of the following JSX syntaxes: <></>, <div></div>, or <React.Fragment></React.Fragment>.***

24. Now, you can work on the card within the component:

**Declare a constant for the image path, a constant for the title, one for the body, and if necessary, one for the button text.**

25. **In React, when you need to display the value of a constant or variable within an element, you must instruct the program to integrate JavaScript code. To do this, enclose the JavaScript code in double curly braces: { JavaScript code }.**

***The result, for example, would be (with two pairs of curly braces)***

*** {${constant_or_variable_value}} ***
______________________________________________


**Props:**


26. **Props are the formal parameters of functions that return the elements of a component.**

***props is a standard conventional term; it's a good practice to use it for code clarity.***


27. In the component (for this occasion, a third component called **Component_props.js** was created), we pass the formal parameter **props**.

28. By logging props, you can see that it is an object.

29. In **App.js**, for the embedded component, we added a property (name with the value 'John') using the following syntax:

 ***key={value}***


30. Now, when you log props, you can see that the object has a property, in our case, the name property with the value 'John'.

31. **In App.js, we instantiate 3 objects (in our case: hello_1, hello_2, hello_3).**

32. **By modifying the properties of the embedded components, you can see them in the console. The modification is done using the following syntax:**

***<component key={object_name.property}></component>***


32. **In the component file (Component_props.js), we passed the actual parameters derived from the objects instantiated in App.js and from there passed as attributes of the embedded component object to the element to be rendered returned by the component's function.**

______________________________________________
______________________________________________
***Each Component is an object whose value is the element to be rendered returned by the function.***

***Props are the Component itself.***

***Props can be assigned properties (key: value) that we can give through the discussed syntax, eventually fetching them from specifically instantiated objects.***
______________________________________________
______________________________________________


33. **Another more convenient and concise way to pass properties to embedded components from instantiated objects is through the ***Spread Operator*** introduced by the curly braces related to JSX Syntax:**

***<component {...object_name}></component>***


34. Subsequently, in the component file, you can perform **Object Deconstruction**:

***const {key, key} = props;***


35. **Now, you can modify the syntax within the function that returns the elements to be rendered, passing {key} instead of {props.key}. For example:**

***<h2>{key}</h2>***
______________________________________________


**Props Children:**


36. **Props children** are properties assignable to specific Components.

In React, **children** is a **reserved word**.

**We can implement a props child within the JSX tag related to the embedded component in the JavaScript "management file" (for example, in our case, App.js).**

**By implementing it as a ***<React.Fragment></React.Fragment>***, we can pass it to the Component, and if that Component is embedded multiple times, we can pass it just once if desired, by inserting it only inside the tag we want.**

**In the Component file, pass ***{children}*** in the object props destructuring, and also inside the fragment where you want to render it, using the JSX syntax ***{children}***.
______________________________________________