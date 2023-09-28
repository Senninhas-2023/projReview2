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

# 3 -

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

* **4.2 - Codechange:**

````bash
export function sumWithDiscount(disc: number, ...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela) * (1 - disc);
}
````
<br>

# 5 - Pull request:

### Creation of a pull request with the assingment of a team member as a reviewer of the code changes.

![Pull Request](/docs/img/03.PNG)

<br>
<br>
<hr>
<p align="center">&lt;&lt;&lt;&copy;<a href="https://github.com/Senninhas-2023" target="blank">Senninhas-2023</a>&gt;&gt;&gt;</p>