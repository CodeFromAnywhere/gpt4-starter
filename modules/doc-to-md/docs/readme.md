# Converting to HTML

You can use mammoth to convert docx to HTML,
then use another npm lib to convert the HTML to json.

This **could** lead to better results than just extracting the raw text.

```jsx
mammoth
	.convertToHtml({ path: sample2 })
	.then(function (result) {
		var html = result.value; // The generated HTML
		console.log('this is the html: ' + JSON.stringify(html, null, 2));
		var messages = result.messages; // Any messages, such as warnings during conversion
	})
	.done();
```
