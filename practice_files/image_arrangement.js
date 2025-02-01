/*
You are arranging images on the home page of a major website! You have a list of images in this format:

[{"width": 300, "height": 300, "src": "puppy.jpg"},
{"width": 200, "height": 500, "src": "kitty.png"}]

Your job is to organize these images into spaced rows. Given a page width and row height, scale each image so that it is
exactly as tall as the row, and maintains its aspect ratio.

Then add each image into an array of rows, such that the total row width does not exceed the given page width. If an
image can't fit within a given row, it should be added to the next row instead. You won't need to re-order the images.

In ascii art (not to scale) this would look like:

Before:
------------------------
| | -----------------------------
| kitty1 |---------| |
| (100x80) ||kitty2 || kitty3 |
| ||(10x20)|| (150x60) | <more kitty photos>
  --------------------------------------------------------------

  After:
  --------------------------------------------
  | kitty1 ||kitty2 || kitty3 | <--- row 1 | (50x40) ||(20x40)|| (100x40) |
    ---------------------------------------------- | kitty4 || kitty5 | kitty6 | <--- row 2 | (80x40) || (80x40) |
    (60x40) | ----------------------------------------------- 
    
    Your function should have the following signature:

    makeIntoRows(images, pageWidth, rowHeight) 
    
    See the following for an example call and correct results for a page
    width of 220, and a row height of 40. 
    
    // given this list of image objects const images=[ {"width": 100, "height" :
    80, "src" : "kitty1.jpg" }, {"width": 10, "height" : 20, "src" : "kitty2.jpg" }, {"width": 150, "height" : 60, "src"
    : "kitty3.jpg" }, {"width": 10, "height" : 5, "src" : "kitty4.jpg" }, {"width": 40, "height" : 20, "src"
    : "kitty5.jpg" }, {"width": 60, "height" : 40, "src" : "kitty6.jpg" }] 
    
    // call the function with these parameters
    makeIntoRows(images, 220, 40) 
    
    // and this is the expected output 
    // [ 
    //   [ 
    //     {"width": 50, "height" : 40, "src": "kitty1.jpg" }, 
    //     {"width": 20, "height" : 40, "src": "kitty2.jpg" }, 
    //     {"width": 100, "height" : 40, "src": "kitty3.jpg" } 
    //   ],
    //   [ 
    //     {"width": 80, "height" : 40, "src": "kitty4.jpg" },
    //     {"width": 80, "height" : 40, "src": "kitty5.jpg" },
    //     {"width": 60, "height" : 40, "src" : "kitty6.jpg" } 
    //   ]
    // ] 
    
    You can assume: - Each image has positive integer height and widths. - No image is wider than the given page width. 
    
    For a refresher on ratios: x1/y1=x2/y2 -
    The ratio between two images is: resizedImageWidth/resizedImageHeight=origImageWidth/origImageHeight - solving for
    resizedImageWidth: resizedImageWidth=origImageWidth/origImageHeight * resizedImageHeight */

const images = [
  { "width": 100, "height": 80, "src": "kitty1.jpg" },
  { "width": 10, "height": 20, "src": "kitty2.jpg" },
  { "width": 150, "height": 60, "src": "kitty3.jpg" },
  { "width": 10, "height": 5, "src": "kitty4.jpg" },
  { "width": 40, "height": 20, "src": "kitty5.jpg" },
  { "width": 60, "height": 40, "src": "kitty6.jpg" }
];

const
  transformImage = (width, height, newImages, index) => {
    return {
      ...newImages[index],
      width,
      height,
    }
  };

const makeIntoRows = (images, pageWidth, rowHeight) => {
  const newImages = images;
  const rowsResult = [];
  let row = [];
  let remainingPageWidth = pageWidth;

  images.forEach((image, index) => {
    let newImage;
    const resizedImageWidth = (image.width / image.height) * rowHeight;

    if (image.height !== 40) {
      newImage = {
        ...newImages[index],
        width: resizedImageWidth,
        height: rowHeight,
      }
    } else {
      newImage = image;
    }

    if (resizedImageWidth <= remainingPageWidth) {
      row.push(newImage);
    }

    remainingPageWidth -= resizedImageWidth;

    if (remainingPageWidth < 0) {
      rowsResult.push(row);
      remainingPageWidth = 220;
      row = [newImage];
    }

    if (index === images.length - 1) {
      rowsResult.push(row);
    }
  });

  return rowsResult;
}

console.log(makeIntoRows(images, 220, 40));
