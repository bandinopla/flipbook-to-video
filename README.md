![Logo](./demo.gif)
# Flipbook to video :tv:
* EN: Available in english
* ES: Disponible en español

## :rocket: [ Open Editor](https://bandinopla.github.io/flipbook-to-video/) :rocket:

Create a Flipbook and export it as a video. It uses [THREE.js](https://github.com/mrdoob/three.js) as 3D engine and [quick_flipbook](https://github.com/bandinopla/quick_flipbook) to generate the flipbook. It also supports **animated gifs** as texture for the pages by using [threejs-gif-texture](https://github.com/bandinopla/threejs-gif-texture)

[![npm version](https://img.shields.io/npm/v/quick_flipbook.svg?logo=threedotjs)](https://www.npmjs.com/package/quick_flipbook)

## Motivation
The idea is to be able to select a bunch of pre-designed pages, setup this 3D book, and capture the interaction with it into a video (you flipping the pages, etc...) and obtain a video that you can use in diferent things.

## How to use
1. **create a book**
2. **add pages** to it (.png, .jpg, .jpeg, .gif) **Animated gifs** are allowed! :)
3. **hit "record"** and interact with the flipbook, each frame of the interaction will be recorded to a video.
4. hit **stop recording** and download the video. The format of the video is [WEBM](https://en.wikipedia.org/wiki/WebM).
5. **upload it** to some converting site to turn the .webm into a .mp4

## Save / Load
Saving will put all images in a zip file and a json file to restore the work if you hit load later.

