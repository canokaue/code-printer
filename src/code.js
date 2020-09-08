let codes = `
/*
 * Forked from tuobaye0711/code-printer
 * Creative inspiration comes from codepen author Jake Albaugh
 *
 * The project is a simple dynamic code generator distributed exclusively through
 * openbits.world in the arweave permaweb
 * Different from similar works, this project supports some JS operations while supporting CSS special effects display
 */

* {
    -webkit-transition: all 1s;
}
                   
 /* First, I first draw a background board */
 
body {
    background-color: #3D5F8F;
    color: #B6E7DC;
    font-size: 14px; line-height: 1.4;
    margin: 0;
    -webkit-font-smoothing: subpixel-antialiased;
}

/* Then, prepare our "printing paper" */ 
#my-code {
    overflow: auto;
    position: fixed; width: 70%;
    margin: 0;
    top: 55px; bottom: 20px; left: 15%;
    transition: left 500ms, width 500ms, opacity 500ms;
    background-color: #111111; color: #f9f9f9;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 24px 12px;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow:
        0px 0px 0px 1px rgba(255,255,255,0.2),
        0px 4px 0px 2px rgba(0,0,0,0.1);
}

/*
 * It's still ugly now, we can just highlight the code
 *
 * Just use the Monokai theme I usually use in the IDE to color our code
 */

pre em:not(.comment) { font-style: normal; }

.comment       { color: #75715e; }
.selector      { color: #a6da27; }
.selector .key { color: #a6da27; }
.selector .int { color: #a6da27; }
.key           { color: #64d9ef; }
.int           { color: #fd971c; }
.hex           { color: #f92772; }
.hex .int      { color: #f92772; }
.value         { color: #fefefe; }
.var           { color: #66d9e0; }
.operator      { color: #f92772; }
.string        { color: #d2cc70; }
.method        { color: #f9245c; }
.run-command   { color: #ae81ff; }

/*
 * Isn't it beautiful?
 *
 * Just printing CSS is still a bit boring, why don't you have some JS code?
 *
 * let's go!
 */
~\`

/* I want to manipulate the DOM and add a title to this page */
var title = document.createElement("h1");
title.id = "title";

/* Well, give a name */
title.innerHTML = "<a>this is<em>perma-printer</em>Project address</a>";

/* Do a little action */
title.childNodes[0].href = "https://github.com/canokaue/perma-printer";
title.childNodes[0].target = "view_window";

/* Finally add it to the DOM */
document.body.appendChild(title);
             
/*
 * If our JS is executed while printing, our console must be reported an error to refresh the screen
 *
 * So we use a tilde to control code execution
 *
 * Follow my orders and execute!
 */

 ~

/*
 * how about it?
 *
 * The title has been added to the DOM, but it is a bit ugly
 *
 * Change to CSS code again and modify it
 */
\`

#title {
  position: fixed; width: 100%; 
  top: 0; left: 0; right: 0;
  font-size: 14px; line-height: 1;
  font-weight: 100; text-align: center;
  padding: 10px; margin: 0;
  z-index: 10;
  background-color: #111111;
  border-top: 1px solid rgba(255,255,255,0.2);
  transition: opacity 500ms;
}

#title a {
    text-decoration: none;
    color: white;
}

#title em { 
  font-style: normal;
  color: #ff2eed;
}

/*
 * Secretly tell you, click on the text to jump directly to the project address
 *
 * I hope you can star&fork
 */

/* Adjust the layout */

#my-code { left: 20px; width: calc(50% - 30px); }

#iframe {
  position: fixed;
  display: block;
  border: 0;
  background-color: white;
  border-radius: 2px;
  width: calc(50% - 30px); height: calc(100% - 75px);
  transition: left 500ms, width 500ms;
  top: 55px; bottom: 20px; left: 100%; 
  box-shadow: 
    0px 0px 0px 1px rgba(255,255,255,0.2),
    0px 4px 0px 2px rgba(0,0,0,0.1);
}
~\`
/* Next, I will open openbits.world */

/* First, create an iframe */
var iframe = document.createElement("iframe");
/* Attach index file */
iframe.src = "render/index.html";

/* Attach ID */
iframe.id = "iframe"

/* Add to DOM */
document.body.appendChild(iframe); ~
\`
/* Come on */
#iframe { left: calc(50% + 10px); }
                                             
~\`
document.getElementById("iframe").src = "render/index.html"; ~\`

`;


module.exports = codes;