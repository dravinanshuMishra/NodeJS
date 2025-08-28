```javascript
	Base-64 Encoding?
Base64 is a character encoding that takes binary data and converts it into a string.

	In Browser: btoa() and atob()
btoa () → Binary to ASCII → converts a string to Base64 encoded string.
atob () → ASCII to Binary → decodes Base64 string back to original.

	Base-64 rules:
•	At least 3 bytes (24 bits) should be there to work with.
•	If 3 bytes (24 bits) are not there then base64 encoding will multiple zero to fill remining bytes.
•	Data should be in the multiples of 3 bytes. 


for run txt file in terminal
// xxd -b file name and enter to know binary data.

```