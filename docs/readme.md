<h1 align="center">PRESENTATION</h1>

<p align="center">
<img src="https://portotechhub.com/wp-content/uploads/2022/12/SWitCH_QA.png" alt="SwitchQA" title="SwitchQA" width="600px">
</p>
<hr>

# 1 - Organization Structure on Github:

<h1 align="center">

![01](/docs/img/00.PNG)

<br>

# 2 - Project Creation

<h1 align="center">

![02](/docs/img/01.PNG)


<br>

# 3 - Github Repo Creation

<h1 align="center">

![03](/docs/img/02.PNG)

</h1>

# 4 - Codechange

### (added function sumWithDiscount(disc, valores) to the code of calc.ts)

* **4.1 - Orignal Code:**

````bash
export function sumOnly(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela);
} 
````

* **4.2 - Code Change:**

````bash
export function sumOnly(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela);
} 

export function sumWithDiscount(disc: number, ...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela) * (1 - disc);
}
````
<br>

# 5 - Pull request:

### Creation of a pull request with the assingment of a team member as a reviewer of the code changes.

<h1 align="center">

![04](/docs/img/03.PNG)

![05](/docs/img/04.PNG)

<br>

# 6 - Reception of Github notification on the "Reviewer" side:

<h1 align="center">

![06](/docs/img/05.PNG)

<br>

# 7 - Code Changes Aproval Notification via Email:

<h1 align="center">

![07](/docs/img/05-2.PNG)

<br>

# 8 - Code Changes Aproval:

<h1 align="center">

![09](/docs/img/07.PNG)

<br>

# 9 - Branch conflicts fixed and merge action

<h1 align="center">

![10](/docs/img/08.PNG)

<br>

# 10 - Confirmation of successful branch merge

<h1 align="center">

![11](/docs/img/09.PNG)

<br>

# 11 - Updated Github project commits history

<h1 align="center">

![12](/docs/img/10.PNG)

<br>
<br>
</h1>
<p align="center">&lt;&lt;&lt;&copy;<a href="https://github.com/Senninhas-2023" target="blank">Senninhas-2023</a>&gt;&gt;&gt;</p>