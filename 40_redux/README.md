# Installation
* To install the stable version:
```
npm install redux
```

# Complementary Packages
* Most likely, you'll also need the React bindings and the developer tools.
```
npm install react-redux
npm install --save-dev redux-devtools
```
* Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like Webpack and Browserify for the most comfortable development experience.

# Concepts

## Action
- Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

- Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

## Action Creators
- Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term.

