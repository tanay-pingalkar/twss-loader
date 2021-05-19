# twss-loader

<h3> a tailwind css webpack loader that give you rid of inline style with features like variables </h3>

## why a loader for tailwind css

tailwind css is great but the only thing i hate about tailwind css is its inline style, it grows bigger and bigger and our app looks more dirty even if the output is great
thats why I created a this loader that with loads `.twss` to jsvascript. <br>

## from

app.js

```javascript
const App = () => (
  <h1 class=" text-4xl mt-52 font-extrabold tracking-widest text-center z-10 bg-blue-100 flex and-so-on">
    inline styled react component
  </h1>
);
```

## to

style.twss

```xml
*title:
  text-4xl
  mt-52
  font-extrabold
  tracking-widest
  text-center
  z-10
  bg-blue-100
  flex
  and-so-on
```

app.js

```javascript
import { title } from "./style.twss";
const App = () => <h1 class={title}>inline styled react component</h1>;
```

## interesting ! lets set it up

cmd:- `npm install twss-loader --save-dev` <br>
webpack.config.js

```javascript
module.exports={
  ...
  module: {
    rules: [
      ...,
      {
        test: /\.twss/,
        loader: "twss-loader",
      },
      ...,
    ],
  },
  ...
}
```

## variables

variables is not different in twss. It is like this
<br> .twss

```html
# this is a comment

*blue: 
  bg-blue-300 

*mainDiv: 
  flex 
  justify-center 
  *blue

```

loaded js output

```javascript
module.exports = {
  blue: "bg-blue-300",
  mainDiv: "flex justify-center bg-blue-300",
};
```

! remember it have scopes, `*blue` should be defined before `*mainDiv`

## future plans

the future plan is to make import and export synstem, and instead of converting it to javascript, it will convert it to css.

## what is `*`?

`*`star tells the loader that this is a class, it makes difference between `lg:text-center` and class.
