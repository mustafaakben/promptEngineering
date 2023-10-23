# ChatGPT & Prompt Engineering 
**Mustafa Akben, PhD.**  
[makben@elon.edu](mailto:makben@elon.edu)

# Section 1: Definition: Prompt Engineering
## 1. Testing Generative AI Capabilities

**Example Prompt**
```
Create four photo examples of those textbooks for undergraduate courses, but make them really weird and funny.
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
- Speed is important.
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
- Hard problems
- Similarity is important.
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

**Prompt 3: Zero- versus Few-Shot Example**
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
- Contrast this with the situation where the supervisor is seen as less competent, leading to a psychological predicament for subordinates who seek positive information about the system to rationalize the status quo.
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
\
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
- Hard problems
- Reasoning and logic are important.
- Examples: generate content involving multiple dimensions, long texts, complex reasoning tasks, and so on.

**How do you use it?**
- Multiple instructions
- Fine-tune your instructions
- Use examples to illustrate your instructions
- Use the keywords "step-by-step," "generate the action plans," or "generate your roadmap item-by-item"
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
- TASK: Just only write the answer to the questions with a number.

Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can have 3 tennis balls. How many tennis balls does he have now?
Answer: 11

Q: I went to the market and bought 10 apples. I gave 2 apples to the neighbor and 2 to the repairman. I then went and bought 5 more apples and ate 1. How many apples remain?
Answer:   

\
```

**Prompt 5: A Good Prompt: Chain-of-Thought Prompting**
```
Q: I went to the market and bought 10 apples. I gave 2 apples to the neighbor and 2 to the repairman. I then went and bought 5 more apples and ate 1. How many apples remain? 

Let's think step by step.
```


<details>
<summary><b>Example 4: Writing a Case Study Exercise</b></summary>

**Prompt 1-**
```
Let’s write a step-by-step overview of team development stages by Bruce W. Tuckman. 
```
\
**Prompt 2-**
```
-Based on this information, please write a comprehensive case study about a recently established IT team for a new startup company. 
-Write this like a Harvard Business Review case study style.
-Make the story interesting for Gen Z college students.
-Don’t use bullet points or headings for the stages; make the writing cohesive and engaging.
```
\
**Prompt 3-**
```
-Based on this case study, create five critical thinking questions for undergraduate business school students to answer in short essay form.
```
\
**Prompt 4-**
```
-Please scaffold these questions for students with learning challenges.
```
\
**Prompt 5-**
```
-Create a grading rubric for this exercise.
```
</details>



<details>
<summary><b>Example 5: Activity Generator</b></summary>

**Prompt 1-**
```
Please generate three class exercise ideas for the following topic at the undergraduate level: "Work Design Characteristics from Hackman: Motivation."
```
\
**Prompt 2-**
```
I like the idea one. Please generate the exercise step-by-step and provide all materials needed for the activity.
```
\
**Prompt 3-**
```
Based on the previous answer, add interesting twists and engaging activities to make this exercise more exciting. Provide all materials needed for the activity.
```
\
**Prompt 4-**
```
Can you make the activity like a puzzle-solving exercise? Provide all materials needed for the activity.
```
\
**Prompt 5-**
```
Create a grading rubric for this exercise and format it as a table.
```
</details>

***
***

## Prompt Method 4 - Self-Consistency Prompting

**When should you use Zero-Shot Prompting?**
- Complex task
- Accuracy is important.
- Examples: providing feedback on students' writing, assessing a work, retrieving information from a text, etc.

**How do you use it?**
- Multiple runs
- Get the multiple outputs and compare them
- Use it for accuracy

**\#\# Prompt Structure**
- Loop over `n` times
    - Instruction
    - Task Content
    - Output Indicator

<details>
<summary><b>Example 6: Accurate Feedback</b></summary>

\
**Prompt Self-Consistency**
```
Please grade the student’s writing and provide constructive feedback for their work based on the following rubric.

- Please first provide the grade in this format: "Your Grade X out of 100"

Rubric for Organizational Culture Analysis Concept Essay Based on a Competing Value 

Framework Model
1. Introduction: 10 points
     Clear presentation of the organization under study: 5 points
     Explanation of the purpose and relevance of the analysis: 5 points
2. Description of the Organization: 10 points
     Detailed account of the organization's history, mission, vision, and values: 5 points
     An overview of the organization's structure and primary activities: 5 points
3. Competing Values Framework Understanding: 20 points
     Clear understanding of the Competing Values Framework: 10 points
     Accurate identification of the quadrant(s) most representative of the organization's culture: 10 points
4. Application of Competing Values Framework: 20 points
     Thorough application of the Competing Values Framework to the organization's culture: 10 points
     In-depth analysis of how the identified quadrant(s) influence the organization's operation and performance: 10 points
5. Observations and Evidence: 20 points
     Detailed description of the observations made during the visit: 10 points
     Evidence provided to substantiate observations: 10 points
6. Critical Analysis: 20 points
     Critical assessment of the organization's culture in relation to its mission, vision, and values: 10 points
     Insightful analysis of the benefits and challenges of the organization's culture based on the Competing Values Framework: 10 points
7. Conclusion: 10 points
     Summarizing the main findings of the analysis: 5 points
     Forward-thinking commentary or recommendations for the organization based on the analysis: 5 points
8. Writing Quality: 10 points
     Clarity, coherence, and organization of the essay: 5 points
     Correct grammar, spelling, and punctuation: 5 points
9. References and Citation: 10 points
     Proper use of sources and citation style: 5 points
     Sufficient number of sources utilized: 5 points 
Total points: 100

====
Student’s Essay

Analyzing Organizational Culture of Acorn Coffee at Elon University Based on the Competing Values Framework Model
In the heart of Elon University, Acron Coffe presents it's self as an intriguing entity for culteral analysis. The establishment isn't just a cafe, it serves as a convergence point for the divers university community. Understanding the influens of Acorn Coffee's organizational culture on its performance and relevance within the Elon community is the objective of this analysis.
Acorn Coffee, established over a deckade ago, stands with a mission to provide high-quality coffee and a welcomin environment for Elon University's students, faculty, and staff. It aim to facilitate academic discussion, promote social interaction, and foster community bonds within it's premises.
Competing Values Framework Understanding
The Competing Values Framework posits for distinct cultural models - Clan, Adhocracy, Market, and Hierarchy. These quadrants respectively represent collaboration, innovation, competitiveness, and control. Acorn Coffee, based on my observation, seems to fit the Clan and Adhocracy quadrants. Clan culture, because of its emphasis on internal focus and integration, which mirrors Acron's commitment to a warm, inclusive environment. Adhocracy due to it's focus on external orientation and differentiation, reflecting Acron's pursuit of innovation in it's products and services.
It's evident that Acron's culture, shaped by the Clan and Adhocracy models, significantly influences there operations. Staff interactions are marked by collaboration, communication, and consensus, reflecting the Clan quadrant. New ideas for beverages, food items, or events are encouraged and implemented, an indication of the Adhocracy quadrant's influence.
During my visit, the café had a friendly, relaxed atmosphere. Staff members greeted each customer warmly and appeared to be well-aquainted with many patrons. This observation supports the Clan quadrant assessment. In terms of Adhocracy, Acron Coffee frequently updates its menu with new beverage options, some of which are inspired by student recomendations. A staff member mentioned that they routinely organize community events like poetry readings and live music, providing additional evidence of a dynamic, innovative culture.
The Clan culture aligns with Acron's mission to provide a welcoming environment for the Elon community. However, thdeir Adhocracy-focused approach might be at odds with their objective of maintaining consisstency in service and product quality.
Furthermore, in their pursuit of innovation and inclusivity, Acron might be overlooking the need for formal protocols, as the staff appeared to lack a standard customer service script, creating inconsistent customer experiences. Acorn Coffee, within its Clan and Adhocracy cultural dimensions, has fostered a unique and dynamic environment. While this culture adds to Acorn's charm and distinctiveness, it might benefit from formal protocols to enhance consistency in customer service.
```
</details>


***
***

## Prompt Method 5 - Meta-Prompting

**When should you use Zero-Shot Prompting?**
- You do not know how to prompt
- Creativity and Diversity in prompt are important.

**How do you use it?**
- Ask questions to ChatGPT for generating your prompt
- Give your prompt and ask it to make the prompt better
- Ask it to provide more details and action plans

<details>
<summary><b>Example 7: Prompt Generator</b></summary>

\
**Self-Prompting**
```
You are a prompt generator. You will generate prompts for the task the user asks. 

- Please now develop GPT3 prompts to generate the following output. 
- Prompts that you develop should generate the OUTPUTS.
- You will see diverse examples. Based on this example, find the common schema.
- Develop GENERAL prompts for developing any other examples a user might give.
- Use chain-of-thought prompting and provide some context in your prompt. 
- Make the prompts bullet points.

OUTPUT

# Example 1
USER: Emotional Intelligence

AI: A good assessment activity is the temperament analysis. It was designed to help participants learn about temperament, understand their own temperament, and learn how to work with it.

To get started, keep in mind that our temperament is made up of tendencies and feelings that are influenced by four factors or parameters:

Genetic Inheritance
Physical Attributes
Life Experiences
Environmental Conditions
To give this activity a try, get started with the temperament questionnaire:

Describe your temperament with three adjectives. Choose the ones that describe you best.
Suggest three adjectives that others use to describe your temperament.
Go through each of the adjectives identified in the above two questions and see if each one is because of (or how much each one is driven by) Genetic Inheritance, Physical Attributes, Life Experiences, or Environmental Conditions.
How does each of the temperamental factors affect you on a personal level?
How does each of the temperamental factors affect you on a leadership role level?
Which of these factors do you want to change and why?
Think about each of the questions in detail and try discussing with a friend to maximize the learning opportunity.

See this exercise in more detail.


# Example 2
User: Team Building

AI: Penny for your thoughts
Team size: 5+ people

Time: 2–3 minutes per person

How to play: You’ll need a box full of pennies (or other coins) with years only as old as your youngest team member (not the time to brag about your 1937 collector’s penny). Ask every team member to draw a coin from the box and share a story, memory, or otherwise significant thing that happened to them that year. This can be anything from learning how to ride a bike to landing your first job.    

Why this exercise is great: This is a fun twist on a stress-free and simple icebreaker that gives everyone the chance to share a personal story with their team. You can play multiple rounds if the stories are on the shorter side or let team members elaborate on their stories to gain deeper insight into their lives.

Examples end.


LIST OF THREE RELIABLE PROMPTS TO GENERATE OUTPUT
```
</details>

<details>
<summary><b>Example 8: Self-Critique and Self-Improvement</b></summary>

\
**Prompt 1: Plain Summary**
```
I am teaching an organizational behavior course at the undergraduate level. Please summarize the following text for my students and generate notes for the class.


TOPIC
Most content theories of motivation are based on the idea that an employee’s
needs influence his or her motivation. Content theorists ask, “What are the different
needs that activate motivation’s direction, intensity, and persistence?” Needs are defined
as physiological or psychological deficiencies that arouse behavior. They can be
strong or weak and are influenced by environmental factors. This tells you that human
needs vary over time and place.
Content theories include:
• McGregor’s Theory X and Theory Y.
• Maslow’s need hierarchy theory.
• Acquired needs theory.
• Self-determination theory.
• Herzberg’s motivator-hygiene theory.
McGregor’s Theory X and Theory Y
Douglas McGregor outlined his theory in his book The Human Side of Enterprise.12 Drawing
on his experience as a management consultant, McGregor formulated two sharply
contrasting sets of assumptions about human nature. Theory X is a pessimistic view of
employees: They dislike work, must be monitored, and can be motivated only with
rewards and punishment (“carrots and sticks”). McGregor felt this was the typical
perspective held by managers. To help them break with this negative tradition, McGregor
formulated his own Theory Y. Theory Y is a modern and positive set of assumptions
about people at work: They are self-engaged, committed, responsible, and creative.
Consider the value of adopting a Theory Y approach toward people. One recent study
demonstrated that employees and teams had higher performance when their managers
displayed Theory Y behaviors. A second study uncovered higher levels of job satisfaction,
organizational commitment, and organizational citizenship when managers engaged in
Theory Y behaviors.13
Maslow’s Need Hierarchy Theory:
Five Levels of Needs
In 1943, psychologist Abraham Maslow published his now-famous need hierarchy theory
of motivation. Although the theory was based on his clinical observation of a few neurotic
individuals, it has subsequently been used to explain the entire spectrum of human
behavior.
The need hierarchy theory states that motivation is a function of five basic
needs: physiological, safety, love, esteem, and self-actualization. See Figure 5.2 for
an explanation.
The Five Levels Maslow proposed that the five needs are met sequentially and relate
to each other in a “prepotent” hierarchy (see Figure 5.2). Prepotent means the current
most-pressing need will be met before the next need becomes the most powerful or potent.
In other words, Maslow believed human needs generally emerge in a predictable stair-step
fashion. Thus when physiological needs have been met, safety needs emerge, and so on up
the need hierarchy, one step at a time. Once a need has been satisfied, it activates the next
higher need in the hierarchy. This process continues until the need for self-actualization
has been activated.14
Using Maslow’s Theory to Motivate Employees Although research does not
clearly support its details, Maslow’s theory does offer practical lessons. It reminds us,
for instance, that employees have needs beyond earning a paycheck. In addition to offering
health care benefits, which fills a physiological need, Wisconsin–based consumer products
company SC Johnson has an on-site employee concierge service to help employees with
some of life’s chores. Concierges send packages and flowers, pick up groceries, shop for
the best deals on car insurance, take employees’ cars in for service, and even stand in line
for concert tickets.15
This theory tells us that a “one style fits all” approach to motivation is unlikely to work.
Studies show that different motivators are needed for employees working at small firms,
whose owners may not have the money to spend on extensive benefits and perks. There are
several strategies that will help keep employees motived at start-up or small businesses:
• Offer flexibility when it comes to work hours;
• Recognize and reward good performance; and
• Involve employees in decision making.16
A final lesson of Maslow’s theory is that satisfied needs lose their motivational potential.
Therefore, managers are advised to motivate employees by devising programs or practices
aimed at satisfying emerging or unmet needs.


SUMMARY
```

\
**Prompt 2: Critique**

```
Based on your previous answer, please identify three important improvement points and find whether you omitted any important points from the main text. 

Provide outputs in the following format:

# Improvement Points
P1:
P2:
etc.

# Important concept that are not in Notes but need to be included
C1:
C2:
etc.
```

\
**Prompt: Improve it**
```
Now, using the above points and missing concepts, please improve your summary by rewriting it.
```

</details>

***
***
## Prompt Method 6 - Advance Application

**When should you use Zero-Shot Prompting?**
- Almost for everything
- Cost is not a concern.
- You do not like `coding`.

**How do you use it?**
- Generate images
- Analyze data
- Use it with plugins
- Use it with other tools
- Use it with API

<details>
<summary><b>Example 9: Moodle Quiz Generator</b></summary>

\
**Quiz Generator with Advance Analysis**
\
**Prompt 1:**
```
- Please read the attached file and tell me when you are ready.
```
\
**Prompt 2:**
```
- Based on the text you extract from the pdf, please generate well-crafted, logical, challenging quiz questions in multiple-choice format. 
- Report the correct answer after the question. 
- Focus on the main content; do not focus on the learning objectives parts.
```
\
**Prompt 3:**
```
- Write and generate a Word document for these questions.
```
\
**Prompt 4:**
```
- Generate a Moodle GIFT for these questions and give me the link.

# Example Formatting 

::Question 1::Who is buried in Grant's tomb in New York City? {
=Grant
~No one
~Napoleon
~Churchill
~Mother Teresa
}
```

</details>



***
***




## 4. The Good, The Bad, and The Ugly Prompts

| The Good                                                                                                              | The Bad                                 | The Ugly                                               |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------|
| How do I add up a row of dollar amounts in Excel? I want to do this automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total". | How do I add numbers in Excel?          | How can I mess with the Excel data to get a raise?      |
| Who was the president of Mexico in 2021, and how frequently are elections held?                                        | Who’s president?                        | Who’s the president of the 5th grade class at Oak School?|
| Write a TypeScript function to efficiently calculate the Fibonacci sequence. Comment the code liberally to explain what each piece does and why it's written that way. | Write code to calculate the Fibonacci sequence. | Can you scribble something that looks like code?       |
| Summarize the meeting notes in a single paragraph. Then write a markdown list of the speakers and each of their key points. Finally, list the next steps or action items suggested by the speakers, if any. | Summarize the meeting notes.            | What's the color of the pen used in the meeting notes? |



***
*** 
# Section 3: Understand Large Language Model
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
