# Photo Gallery with React Components

## Assignment 1 for Advanced Web Development class at OSU instructed by professor R. Hess.
The goal of this assignment is to write React components and compose them together into a simple application. In this application, the user can click a button to open a dialog, enter information about photos into that dialog, and see those photos appear in the application when they click the dialog’s “accept” button.

![Screen capture of full app demo](screencaps/photo-gallery-demo.gif)

## Photo submission dialog

When the user clicks the “open dialog” button in the left column, a dialog appears below the button. This dialog contains fields and controls that allow the user to submit information about a photo to be displayed in the application’s right column. In particular, the dialog contains the following elements:
  * A text field in which the user can enter the URL of a photo.
  * A text field in which the user can enter the caption of a photo.
  * An “accept” button.
  * A “cancel” button.

The dialog has the following behaviors:
  * If the user enters values in both fields (photo URL and caption) and clicks the accept button, then a corresponding photo is added
  * If the user clicks the accept button while either text field is empty, then a small warning appears to let the user know they need to enter both values.
  * If the user hits the cancel button, then the dialog closes without further action.

## Photo list

The application contains a list of all the photos submitted by the user via the dialog described above. Each photo should display both an image and its corresponding caption.  The photos are laid out with the following constraints:
  * The most recently submitted photo appears first in the list.
  * The photos do not overflow the viewport in the horizontal direction. In other words, the user does not have to scroll horizontally to see more photos.

## Application styling

To accomplish some of the layout required in the description above, CSS code has been written for this application.

## Working with this code

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Before running this app for the first time, make sure to run `npm install` to install needed dependencies. Then, to run the app and see it in your browser, you can run
```
npm start
```
This will run the app in the development mode, and it should automatically open [http://localhost:3000](http://localhost:3000) to view the app in your browser (though you can manually open that URL in your browser, too).
