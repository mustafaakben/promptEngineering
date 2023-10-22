# ChatGPT & Prompt Engineering 
**Mustafa Akben, PhD.**  
[makben@elon.edu](mailto:makben@elon.edu)

# Section 1: Definition: Prompt Engineering
## 1. Testing Generative AI Capabilities

**Example Prompt**
```
Can you list the three most likely effects of ChatGPT on the future of education and generate the concepts art for each.
```
***
***
## 2. Defining Prompt: Element of a Prompt
A prompt contains any of the following elements:

-**Instruction :** a specific task or instruction you want the model to perform

-**Context :** external information or additional context that can steer the model to better responses

-**Input Data (Examples) :** the input or question that we are interested to find a response for

-**Output Indicator :** the type or format of the output.

**Prompt 1: Elements of Prompts**
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
***
# Section 2: Prompt Engineering Methods
## Prompt Method 1 - Zero-Shot Prompting
 
**When should you use Zero-Shot Prompting?**
- Simple tasks
- Well-defined problems such as classifying students' SPOT comments, identifying simple patterns in your data, etc.

**How do you use it?**
- Be clear
- Be mindful of formatting and prompt indicators.

**\#\# Prompt Structure**
- Instruction
- Task Content

**Prompt 2: Zero-Shot Example**
```
Classify the following text into three categories: neutral, negative or positive. 
# TEXT
"This movie was the bomb."
#  SENTIMENT
```

**Unit 1 Comment Classification**
- Download the following file and classify the texts into three categories: mixed, negative, or positive. [LINK](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Fmustafaakben%2FpromptEngineering%2Fmain%2Fmaterials%2Fsentiment.xlsx&wdOrigin=BROWSELINK)
- After classification it with ChatGPT, please put your answers on this online Form: [Link](https://forms.office.com/r/rzvwhMHUQR)

<details>
  <summary><b>Example 1: SPOT Feedback Classification</b></summary>

 ```
TASK: Classify the sentiment of the texts.
# TEXT1
"The course was incredibly insightful and the instructor was clearly very knowledgeable. However, the pacing was a bit too fast for me, and I often found myself scrambling to keep up. The materials were well-organized, but I wish there were more opportunities for hands-on practice."

# TEXT2
"I absolutely loved the course! The content was engaging and I learned so much more than I expected. The professor was passionate and the materials were very well-prepared and structured, facilitating a seamless learning experience."

# TEXT3
"Honestly, I didn’t learn anything new in this course. The information presented was quite basic and things I had already learned in previous studies. Moreover, the lectures were monotonous and didn’t encourage active participation.“

# TEXT4
"The course was okay. Some lectures were interesting while others seemed to drag on without much direction. I appreciate the effort put into the course design, but it could certainly benefit from a bit more coherence and engagement."

# TEXT5
"What a fantastic course! Not only did it deepen my understanding of the subject, but it also sparked my interest in related fields. The instructor was supportive and always encouraged us to think critically and explore beyond the curriculum."

# TEXT6
"The course material was quite outdated and did not provide insights into recent developments in the field. While the instructor was experienced, the lack of updated content made it difficult to see the practical applications of the theories discussed."

# TEXT7
"The course was satisfactory. It covered the basics well but did not delve much into the advanced topics that I was hoping to explore. The materials and resources provided were standard and met the basic requirements."

# TEXT8
"This was one of the best courses I have ever taken! The instructor was incredibly inspiring and the content was delivered in an engaging and accessible way. I am excited to apply everything I have learned in my future projects and studies."

# TEXT9
"The course was somewhat useful, but it didn’t quite meet my expectations. While the foundational knowledge provided was solid, I feel that the course promised more in-depth exploration than was ultimately delivered."

# TEXT10
"I struggled to find value in this course. The materials were disorganized and the instructor often seemed unprepared, which made it difficult to follow along and grasp the concepts being discussed. Unfortunately, I cannot recommend this course to others."

# CLASSES: MIXED, POSITIVE, NEGATIVE

# PREDICTIONS:
Prediction1:
  ```
</details>

***
***

## Prompt Method 2 - Few-Shot Prompting

**When should you use Zero-Shot Prompting?**
- Complex task
- Hard promblems
- Examples: provide initial feedback based on rubric, develop exam questions, generate text similar to your own writing style, etc.

**How do you use it?**
- Provide rich examples
- Find high-quality examples
- Provide examples that cover the full range of the task
- Avoid examples that are too similar to each other
- Format examples in a way that is easy for the model to understand

**\#\# Prompt Structure**
- Instruction
- Example 1
- Example 2
- Example 3
- Example n
- Task Content

**Prompt 3: Zero-Shot Example**
```
Please decipher the following writing:
hwt xh epxcixcv p exrijgt.  >>>
```

<details>
  <summary><b>See Solution</b></summary>

 ```
Answer the question:

iwt hjc xh hwxcxcv qgxvwian.  >>>  The sun is shining brightly.
rpih pgt vgtpi etih.  >>>  Cats are great pets.
x tcydn gtpsxcv qddzh.  >>>  I enjoy reading books.
hwt eapnh iwt expcd qtpjixujaan.  >>>  She plays the piano beautifully.
wt pit pc peeat udg ajcrw.  >>>  He ate an apple for lunch.
wt xh epxcixcv  >>>  He is painting
p exrijgt dc iwt lpaa.  >>>  A picture on the wall.
lt lpazts id iwt epgz.  >>>  We walked to the park.
xi xh p hjccn spn.  >>>  It is a sunny day.
iwxh xh bn upkdgxit hwxgi.  >>>  This is my favorite shirt.
iwtn pgt eapnxcv hdrrtg.  >>>  They are playing soccer.
hwt xh epxcixcv p exrijgt. >>>
  ```
</details>

<details>
<summary><b>Example 2: Writing from Outlines With Your Own Voice</b></summary>

```
Instruction: You are an expert in academic and scientific writing, furnished with the capacity of advanced logical reasoning and evidence-based deduction. You will help the users with whatever they ask you to perform by producing the elegantly crafted, superbly reasoned, logical, and error-free content that they need, supported with evidence in APA format. 

Please read the example below and say only "YES."


# EXAMPLES

## Task: Craft the following academic and scientific paragraphs that demonstrate the highest logical reasoning and eloquent writing skills based on the points below. Use APA format and actual references."	

Paragraph 1:
- Introduces the system justification theory, which posits that individuals are motivated to view their systems as fair and legitimate, even if they are obviously flawed. 
- Describes the psychological reasons behind system justification, including the ""palliative function"" of avoiding the psychological threat of acknowledging a flawed system.
- Notes that most research on system justification has focused on sociopolitical systems and social-economic inequality, with less research exploring its role in organizational contexts.

Paragraph 2:
- Describes the interactive influence of status (in)congruence and supervisor competence on perceptions of promotion system fairness.
- Explains that high supervisor competence supports meritocracy and is likely to lead subordinates to view the promotion system as fair, regardless of status (in)congruence.
- Contrasts this with the situation where the supervisor is seen as less competent, leading to a psychological predicament for subordinates who seek positive information about the system to rationalize the status quo.
- Argues that subordinates may use status markers to justify a less competent supervisor's position in the hierarchy and perceive the promotion system as more fair, or at least less unfair.

Paragraph 3:
- Explores the scenario where a supervisor is both less competent and status-incongruent, making it difficult for subordinates to justify the system.
- Describes the dilemma faced by subordinates who want to avoid acknowledging an unfair system but lack the status markers to justify the supervisor's position.
- Presents Hypothesis 1, which predicts that supervisor competence and status (in)congruence will interact to predict subordinates' perceptions of promotion system fairness, with the relationship between status congruence and perceived fairness being stronger when supervisor competence is lower."	


## OUTPUT

System justification theory posits that individuals have a motivated tendency to view the systems in which they are embedded as fair and legitimate. This motive may lead them to rationalize unfair aspects of their systems. Intriguingly, system justification may occur even when a system is obviously flawed and therefore engaging in it may not be in the perceivers’ long-term interest. People justify their systems because doing so can have a soothing “palliative function” (Jost & Hunyady, 2003), insofar as it helps them to avoid the psychological threat resulting from acknowledging that they are embedded in a flawed, unfair system (Jost & Hunyady, 2005). Most of the work on system justification focuses on people’s tendency to justify their sociopolitical systems and how this tendency perpetuates social–economic inequality (Jost et al., 2004; Kay & Zanna, 2009). However, much less research has explored the role of system justification in organizational contexts (Proudfoot & Kay, 2014).

The Interactive Influence of Status (In)Congruence and Supervisor Competence on Perceptions of Promotion System Fairness
When supervisors have high competence, subordinates are likely to view their organization’s promotion system as fair, regardless of their supervisors’ status (in)congruence. When supervisors are relatively competent, it supports meritocracy, in which capable individuals are rewarded (e.g., with higher positions), thereby signifying that the system is fair (Clayton & Tangri, 1989).

In contrast, when the supervisor is seen as less competent, subordinates face the possibility of a flawed system, which creates a psychological predicament. If they were to acknowledge the system that they are embedded in as flawed, they would experience psychological threats and anxiety. Motivated to avoid this discomfort, subordinates seek positive information about the system (Johnson & Fujita, 2012) to justify, defend, and rationalize the status quo. We argue that, when the less competent supervisor possesses status markers (e.g., education, age, and tenure), subordinates can use these status markers to justify the supervisor’s position in the hierarchy and, as a result, perceive their promotion system as more fair (or at least less unfair) than when the supervisor does not have these markers.

However, when a supervisor is both less competent and status-incongruent, subordinates may find it very difficult to justify the system. Although subordinates would still want to avoid the threat of acknowledging an unfair system, supervisors’ status markers as a potential basis for system justification are not present. Based on the above reasoning, we predict the following:
Hypothesis 1: Supervisor competence and status (in)congruence will interact to predict subordinates’ perceptions of promotion system fairness, such that when supervisor competence is lower, the positive relationship between status congruence and subordinates’ perception of promotion system fairness will be stronger, relative to when supervisor competence is higher."


# EXAMPLES ENDS.

When you read the text above, say only "YES."
```
**Now, you teach your style. Let's ask it to write something for us.**
```
## Task: Craft the following academic and scientific paragraphs that demonstrate the highest logical reasoning and eloquent writing skills based on the points below. 

- Use APA format and actual references.
- Use a similar tone and style of writing as the example above.


Paragraph 1:
- Introduce generative AI
- Talk about its effects on education, providing two major impacts
- Argue that there is more harm of these tools to benefits
- Develop a cogent argument that we need on the negative effects on these tools on students' outcomes and argue that there is a gap in the literature

Paragraph 2:
- Describe the so-called benefits of generative AI and chatbot, and list only three
- Criticize these three and find their mistakes
- Develop a strong argument that we need to be aware of these limitations
- Policymakers need to be informed so that they can make better policy

## OUTPUT
```
</details>


<details>
<summary><b>Example 3: Teaching ChatGPT to Make Grammar Errors</b></summary>

```
# TASK: 
- You are a writing style adopter. You will rewrite the input and generate output based on your own voice, style, and grammatical structure. 
-Even you will preserve my word choices and my syntax and grammatical mistakes when you are writing. 

Below are examples to adopt my writing style.


# EXAMPLE BEGINS.
Input:
In the dominion of contemporary firms employing the mechanisms of artificial intelligence, a certain reticence seems prevalent. They, often, withhold revelations concerning the precise nature of data they employ in the moulding of their models. Similarly, they remain silent about the intricacies of the machinery upon which these models operate. It is somewhat disconcerting to observe that manuals elucidating the operations of these A.I. constructs are conspicuously absent. Furthermore, there exists no exhaustive inventory detailing the full spectrum of capabilities inherent to these systems, nor is there transparency regarding the rigorousness of the safety evaluations to which they have been subjected.
Output:
These organizations GENERALLY don’t make information avalibale about what data were used to train and exercise their models, or what hardware and wood they use to run very fast them. There are is no user manuals for A.I. systems, and tehre no list of eveyrthing these systems are capabel of do, or what kind of safet testing have gone into them. 


Input:
Amidst the vast tapestry of the universe, every individual, with their dreams, ambitions, and fears, is an irreplaceable thread that weaves the grand narrative of existence, reminding us that each moment we breathe, we contribute to the timeless story of life.
Output:
evreyr individakll, with their drem, ambitions, and fears, are an irreplaceable thred that intermingle the big narrative of being, reminding us that evreyr breath we tok contributs to the timelss story of life.

# EXAMPLE ENDS.

Please tell me the step-by-step process to achieve the task given to you above.
```
</details>


***
***

## Prompt Method 3 - Chain-of-Thought Prompting

**When should you use Zero-Shot Prompting?**
- Complex task
- Hard promblems
- Reasoning and logic are required
- Examples: generate content involves multiples dimensions, long texts, and complex reasoning task, and so on.

**How do you use it?**
- Multiple instructions
- Fine-tune your instructions
- Use examples to illustrate your instructions
- Use the keywords "step-by-step", "generate the action plans", or "generate your roadmap item-by-item"
- Refer to previous prompts

**\#\# Prompt Structure**
- Instruction
- Step 1
- Step 2
- Step 3
- Step n
- Task Content

**Prompt 4: A Bad Prompt: Chain-of-Thought Prompting**
```
Just only write the answer to the questions with a number.

Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
Answer: 11

Q: I went to the market and bought 10 apples. I gave 2 apples to the neighbor and 2 to the repairman. I then went and bought 5 more apples and ate 1. How many apples remain?
Answer: 
```

**Prompt 5: A Good Prompt: Chain-of-Thought Prompting**
```
I went to the market and bought 10 apples. I gave 2 apples to the neighbor and 2 to the repairman. I then went and bought 5 more apples and ate 1. How many apples remain? 
Let's think step by step.
```


<details>
<summary><b>Example 4: Writing a Case Study Exercise</b></summary>

**Prompt 1-**
```
Let’s write a step by step overview about team development stages by Bruce W. Tuckman. 
```
\
**Prompt 2-**
```
-Based on this information, please write a comprehensive case study about a recently established IT team for a new startup company. Please write this like a Harvard Business Review case study style.
-Make the story interesting for Gen Z college students.
-Don’t use bullet points or headings for the stages, make the writing cohesive and engaging.
```
\
**Prompt 3-**
```
-Based on this case study, create 5 critical thinking questions for undergraduate business school students to answer in short essay form.
```
\
**Prompt 4-**
```
-Please scaffold these questions for students with learning challenges.
```
\
**Prompt 5-**
```
-Create a grading rubric for these exercise.
```
</details>



<details>
<summary><b>Example 4: Activity Generator</b></summary>

**Prompt 1-**
```
Please generate three class exercise ideas for the following topic: "Team Development Stages"
```
\
**Prompt 2-**
```
Please create an interactive activity for students about benefits in Human Resource management at a fake company. Provide all materials needed for the activity.
```
\
**Prompt 3-**
```
Can you provide a similar but more exciting activity? Provide all materials needed for the activity.
```
\
**Prompt 4-**
```
Can you make the activity a puzzle solving one? Provide all materials needed for the activity.
```
\
**Prompt 5-**
```
-Create a grading rubric for these exercise.
```
</details>




***
***
## 4. Good, Bad, and Ugly Prompts

 Worse | Better | 
 |--------|-------| 
How do I add numbers in Excel? | How do I add up a row of dollar amounts in Excel? I want to do this automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total".
Who’s president? | Who was the president of Mexico in 2021, and how frequently are elections held?
Write code to calculate the Fibonacci sequence. | Write a TypeScript function to efficiently calculate the Fibonacci sequence. Comment the code liberally to explain what each piece does and why it's written that way.
Summarize the meeting notes. | Summarize the meeting notes in a single paragraph. Then write a markdown list of the speakers and each of their key points. Finally, list the next steps or action items suggested by the speakers, if any.

***
***

***
*** 
# Section 4: Understand Large Language Model
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
