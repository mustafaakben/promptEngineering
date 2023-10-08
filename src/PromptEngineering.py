import os
import string

## Utility functions
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')


def shift(text,n):
    alphabet = list(string.ascii_lowercase)
    text = text.lower()
    
    shifted_text = ""
    for char in text:
        if char.isalpha():
            idx = (alphabet.index(char) + n) % 26
            shifted_text += alphabet[idx]
        else:
            shifted_text += char
    print(shifted_text, " >>> ", text)
    return shifted_text
 
#########################################################################
#########################################################################
### ANCHOR Content Generating Functions

_ = shift("abcdef", 1)

_ = shift("abcdef", 12)




sentences = [
"The sun is shining brightly.",
"Cats are great pets.",
"I enjoy reading books.",
"She plays the piano beautifully.",
"He ate an apple for lunch.",
"He is painting",
"A picture on the wall.",
"We walked to the park.",
"It is a sunny day.",
"This is my favorite shirt.",
"They are playing soccer.",
# PREDICT THIS WORD
"She is painting a picture."
]

clear()

for sentence in sentences:
    _ = shift(sentence, 15)
    
