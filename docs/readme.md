<h1 align="center">PRESENTATION</h1>

<p align="center">
<img src="https://portotechhub.com/wp-content/uploads/2022/12/SWitCH_QA.png" alt="SwitchQA" title="SwitchQA" width="600px">
</p>
<hr>

# **Presentation:**

## 1 - Organization Structure on Github
<h1 align="center">

![01](/docs/img/00.PNG)

<h1>

<h1 align="center">git checkou

![02](/docs/img/01.PNG)

<h1>

<h1 align="center">

![03](/docs/img/02.PNG)

<h1>

Codechange
(added function sumWithDiscount(disc, valores) to the code of calc.ts)

Orignal Code:
````bash
export function sumOnly(...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela);
} 
````

Codechange:
````bash
export function sumWithDiscount(disc: number, ...parcelas: number[]): number {
    return parcelas.reduce((total, parcela) => total + parcela) * (1 - disc);
}
````



<br>
<br>
<hr>
<p align="center">&lt;&lt;&lt;&copy;<a href="https://github.com/Senninhas-2023" target="blank">Senninhas-2023</a>&gt;&gt;&gt;</p>