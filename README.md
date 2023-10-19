# ChatGPT & Prompt Engineering 
**Mustafa Akben, PhD.**  
[makben@elon.edu](mailto:makben@elon.edu)

*** 
# Section 1: Understand Large Language Model
### 1. Definition of Large Language Model
A large language model like GPT-3.5 or GPT-4 utilizes a transformer architecture to predict the next word in a sequence by maximizing the probability of a word sequence:

```math
P(w_1, w_2, ..., w_N) = \prod_{i=1}^{N} P(w_i | w_1, w_2, ..., w_{i-1})
```

Where:
- $( w_1, w_2, ..., w_N )$ represent the words in the sequence.
- $( N )$ is the length of the sequence.

The model is trained to maximize the likelihood of a word given its preceding words using the `softmax` function:

```math
P(w_i | w_1, w_2, ..., w_{i-1}) = \frac{\exp(s(w_i))}{\sum_{j} \exp(s(w_j))}
```

Where:
- $s(w_i)$  is the score of word $w_i$ computed by the model.
- The denominator is a normalizing factor ensuring that the probabilities sum to 1 over all possible words $w_j$ in the vocabulary.

****

### 2. Definition of Transformers 
#### a. Attention Mechanism
The attention mechanism in Transformers allows the model to focus on different words for a given input. The scaled dot-product attention is defined as:

```math
 \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V 
```
Where: 
- $Q$ , $K$, and $V$ are the query, key, and value matrices, respectively. 
- $d$ is the dimension of the key.

#### b. Multi-Head Attention
Multi-head attention allows the model to focus on different words in parallel for a single encoder/decoder step. It is defined as:

```math
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \text{head}_2, ..., \text{head}_h)W^O
```
Where each head is computed as: 

```math
\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V) 
```
And: 
- $W_i^Q$, $W_i^K$, $W_i^V$, and $W^O$ are learnable parameter matrices. 
- $h$ is the number of heads.

#### c. Positional Encoding
Since the transformer does not have any sense of order of the input sequence, positional encoding is added to give the model information about the position of a word in a sentence. The positional encoding is added to the input embedding:

```math
PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{\frac{2i}{d}}}\right)
```
```math
PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{\frac{2i}{d}}}\right) 
```
Where: 
- $pos$ is the position of the word in the sequence. 
- $i$ is the dimension. 
- $d$ is the model’s input dimension.

#### d. Feedforward Neural Network
Each transformer block contains a feedforward neural network that is applied independently to each position. The feedforward neural network typically consists of two linear transformations with a ReLU activation in between:

```math
FFN(x) = \text{max}(0, xW_1 + b_1)W_2 + b_2
```
Where: 
- $W_1$, $W_2$, $b_1$, and $b_2$ are parameter matrices and bias vectors.

\
\
**Here is the model picture**

![d2l.ai/_images/transformer.svg](https://d2l.ai/_images/transformer.svg)


***
# Section 2: Prompt Engineering
## 1. Testing Generative AI with Dall-E 3

**Example Prompt**
```
Can you list three impacts of generative AI on cats’ relationships with each other and generate images on this concept.
```

***
## 2. Defining Prompt: Element of a Prompt

A prompt contains any of the following elements:

-**Instruction :** a specific task or instruction you want the model to perform

-**Context :** external information or additional context that can steer the model to better responses

-**Input Data (Examples) :** the input or question that we are interested to find a response for

-**Output Indicator :** the type or format of the output.

**Example Prompt**
```
Write a love poem titled “Love of My Life” for my wife, Rebecca's birthday on August 5th like the following example

Example:

Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
"'Tis some visiter," I muttered, "tapping at my chamber door—
Only this and nothing more."

Title: Love of My Life
```

***

## Prompt Method 1 - Zero-Shot Prompting

Use it for simple tasks.

```
Classify the following text into three categories: neutral, negative, or positive.

Text:

One of the best professors i've had at Elon, he is fantastic and clearly cares so much and put so much effort into the class. His lectures are engaging and have a lot of participation aspects. The homework is pretty minimal and the final project is not too bad but the quizzes are only based on the readings so make sure you do them.

Sentiment:
```

## Task 1: Classification
- Download the following file and classify the texts into three categories: neutral, negative, or positive. [LINK](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Fmustafaakben%2FpromptEngineering%2Fmain%2Fmaterials%2Fsentiment.xlsx&wdOrigin=BROWSELINK)
- After classification it with ChatGPT, please put your answers on this online Form: [Link](https://forms.office.com/r/rzvwhMHUQR)


***

## Prompt Method 2 - Few-Shot Prompting

Few-shot learning can be used for complex problems.

## Task 2: Please Decipher the following message with ChaptGPT (hint: Ceaser Cipher)

**A Prompt**
```
Please decipher the following writing:
hwt xh epxcixcv p exrijgt.  >>>
```

***
## Prompt Method 3 - Chain-of-Thought Prompting

Tell the machine to **show the explicit reasoning steps** to increase accuracy
\
\
**A Bad Prompt**
```
Just only write the answer to the questions with a number.

Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
Answer: 11

Q: I went to the market and bought 10 apples. I gave 2 apples to the neighbor and 2 to the repairman. I then went and bought 5 more apples and ate 1. How many apples remain?
Answer: 
```

Add the key word, “**Let’s think step-by-step**” or “**Let’s take a deep breath and think step-by-step**”
\
\
**Example Good Prompt**
```
I went to the market and bought 10 apples. I gave 2 apples to the neighbor and 2 to the repairman. I then went and bought 5 more apples and ate 1. How many apples remain?

Let's think step by step.
```

***

## Task 3: Please Generate a Party Plan with ChatGPT Step-by-Step

**Prompt 1-**
```
- Let's come up with 3 creative and fun party ideas at Elon University, NC. Ideas should be unique and never done before.
- Let’s take a deep breath and think step-by-step.
```
**Prompt 2-**
```
-Based on the second idea, please write a short plan to present the Student’s Life Dean.
-Explain why this party would be very interesting for college students to the Dean.
-Keep it simple and easy to read.
-Make it one page long.

```

**Prompt 3-**
```
Make the goals concrete and assign these goals to each of our group members. We have three people, Mike, Jenny, Hyung.
```
**Prompt 4**
```
- Based on the party information above, please generate our party advertisement hands-out.
- Keep the writing catchy and short, use some fun stuff.
- After the hands-outs, create four different image concept prompts for Dalle-3 by using a diverse set of artistic styles. Images should be creative and funny.
```

***
## 4. Good, Bad, and Ugly Prompts

 Worse | Better | 
 |--------|-------| 
How do I add numbers in Excel? | How do I add up a row of dollar amounts in Excel? I want to do this automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total".
Who’s president? | Who was the president of Mexico in 2021, and how frequently are elections held?
Write code to calculate the Fibonacci sequence. | Write a TypeScript function to efficiently calculate the Fibonacci sequence. Comment the code liberally to explain what each piece does and why it's written that way.
Summarize the meeting notes. | Summarize the meeting notes in a single paragraph. Then write a markdown list of the speakers and each of their key points. Finally, list the next steps or action items suggested by the speakers, if any.

***
## 5. Application of Prompt Engineering to Create a Web App

## Task 4: Please Create a Web App with ChatGPT

***
**TEMP API:**
*** 
**Prompt 1**
```
Let's create a simple webpage that will generate meal ideas for the items that I have in my home.
To create the meal ideas, we will use OpenAI's chatCompletion API.
Please first write simple specs in bullet point format and wait for my next instruction.
Make sure that this app will be a simple single webpage.
```

**Prompt 2**

```
By using the above specs, please follow the following instructions.

1) The user will input from the user input text area, and we will feed the data from this input to the API. After inputs, it will return API from OPEN AI.

2) Make sure that you show the return text with a line break, and when the user submits a request, they can see a waiting indicator. 

3) For the waiting indicator, do not use GIFs. Use only JavaScript.

4) Important: Please also change the message prompt for the system from ""You are a helpful assistant." to "You will generate creative and unique meal ideas for the input ingredients given by the user. Just pick one and give me the recipe!"

5) Write the JavaScript code. To write the code, please use the example API from OpenAI below. I will add an API key later. This is a secure prototype, not publically available. Do not use node.js.



### Example API Call and Response ###

curl https://api.openai.com/v1/chat/completions \

  -H "Content-Type: application/json" \

  -H "Authorization: Bearer $OPENAI_API_KEY" \

  -d '{

    "model": "gpt-3.5-turbo-16k",

    "messages": [

      {

        "role": "system",

        "content": "You are a helpful assistant."

      },

      {

        "role": "user",

        "content": "Hello!"

      }

    ]

  }'

RESPONSE

{

  "id": "chatcmpl-123",

  "object": "chat.completion",

  "created": 1677652288,

  "model": "gpt-3.5-turbo-0613",

  "choices": [{

    "index": 0,

    "message": {

      "role": "assistant",

      "content": "\n\nHello there, how may I assist you today?",

    },

    "finish_reason": "stop"

  }],

  "usage": {

    "prompt_tokens": 9,

    "completion_tokens": 12,

    "total_tokens": 21

  }

}

### Example Ends ###

Let's go step by step and and write HTML, CSS, and JavaScript all.
```

**Prompt 3**
```
1) Ensure that the output is shown in a new line break and left-centered.

2) Ensure that the waiting indicator is shown when the user submits a request.

3) Ensure that the user can submit a request from the user input text area, also with the enter/return key.

4) Update all code without shortening or abbreviations to code.
```

**Prompt 4**
```
1) Let’s make the style of the website with CSS

2) CSS should be funky and vibrant, showing the spirit of our website.

3) Try to use some fun elements and animations.
```

**Prompt 5**
```
1) Now put everything, CSS, JavaScript, and HTML, into a single HTML file.

2) Do NOT shorten the code; write full CSS, JavaScript, and HTML codes.

3) Ensure that you use OpenAI's chatCompletion API.
```

**Prompt 6**
```
Please debug and ensure that all codes are correct on a single HTML file without any abbreviations.
```

**Prompt 7: FOR MAC USERS**
```
For MAC users, please explain how they can run this webpage step-by-step with TextEdit.
```

**Prompt 7: FOR WINDOWS USERS**
```
For Windows users, please explain how they can run this webpage step-by-step with Notepad.
```
