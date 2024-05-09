
# Master History and Philosophy of knowledge
you can do a master of that at eth:
[link](https://ethz.ch/de/studium/master/studienangebot/management-und-sozialwissenschaften/geschichte-und-philosophie-des-wissens.html)

# Hilbert

finitization of calculus and Arithmetization of mathematics:

* replacement of infinitesimals by epsilon-delta limit definitions
* axiomatic approaches to numbers
* up until now a line was not a collection of points. Each of these points can be identified with a number (see numberline)
* acceptance of infinite sets
* functions are thought of mappings from set a to set b (before then it was lines) -> gives new problematic (non-analytic) functions: nowhere differentiable but continuous, nowhere continuous ... (emergence of monsters)

### Cantor's theory

fourier expansion is not changed by change in finite number of places

Cantor tried to analyze which infinities would change fourier expansion -> there are different kinds of infinite.

This want to work with infinite set meant the analysation of infinite sets and overcoming the challenges and paradoxes

### Paradoxes with infinite sets

* $P(A)$ is always larger than $A$. What if $A$ is the set of all sets?
* Russell's paradox: $B = \{X: X\not\in X\} \Rightarrow B\in B \equiv B\not\in B$

### The Kantian Matrix

Division of claim:

* Analytic: The claim is true by definition/logic (e.g. if Sokrates is a man and all men are mortal then Sokrates is mortal)
* Synthetic: The definition/logic are not enough to justify the claim (e.g. this bag is red)

as well as

* A-priori: The claim can be verified without external experience
* A-posteriori: th claim requires external experience for verification

|                  | Analytic        | Synthetic        |
| ---------------- | --------------- | ---------------  |
| A-Priori         | Logical Truths  | ???              |
| A-posteriori     |                 | Empirical truths |

Kant says a claim can be both Synthetic and A-priori: the sum of a triangles angles is 180 degrees. This is because a mathematical proof does not follow by definition or logic (in his sense) but by the construction of a mathematical proof. (This is not anymore a popular approach but it was a popular approach during Hilbert's time and inspired him)

### Hilbert's goals

* infinite set theory
* certainty/no paradoxes

Finite arithmetic can be done by associating each numerical element on one side with exactly one numerical elements on the other side

Non-finite statements:

* $\forall a, b \in \mathbb{N}: a+b = b+a$ (not allowed for Hilbert, since it is an infinite set it doesn't exist, Hilbert allows potential infinite claims but not actually infinite claims)

Solution: use idealized concepts: they don't (necessarily )exist but are useful. Mathematics already use idealized concepts such as imaginary numbers. However, we can't just introduce any idealized concept: it can't lead to any contradictions and needs to be successful. (He doesn't really explain what he means by successful, probs along the lines of useful)

### How do you prove an idealized element doesn't lead to contradictions?

Need to avoid $1\neq 1$

Three layers:

* finite layer: <br>
    * refers to reality
    * The basis of mathematics for Hilbert is the givenness of human reason and correlating symbols.
     managed by immediate intuition concerning symbols
* ideal/formal layer: <br>
    * managed by axioms and rules that aply to the ideal elements
    * does not refer to anything
    * $a+b = b+a$ is still a meaningful statement when replacing a and b with a number.
* metamathematical layer: <br>
    * think about this: $a+b = b+a$ as: symbols from direct experience (a.k.a a number)
    * refers to proffs in layer 2
    * managed by immediate intuition concerning symbols

Goal: Prove in level 3 that layer 2 produces no contradiction

Gödel shows (using only the safe/finite layer which he needs to assume to be good and given) that infinite mathematics is inconsistent (Gensen shows consistency given some infinity, not super popular tho)

