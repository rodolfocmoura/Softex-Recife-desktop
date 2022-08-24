

import pandas as pd

df = pd.read_csv("notas_alunos.csv", sep=";")

media = (df["nota_1"] + df["nota_2"]) / 2
maiormedia= media.max()
maiorfaltas = df['faltas'].max()


df['media'] = media
arraysitu = ['Situacao']
## df["situacao"] = situacao 

for i in range (0,4):
if(media >= 7 and faltas <=5 ):

    arraysitu.append('Aprovado')   

else:

   arraysitu.append('Reprovado')  


df['situacao']= np.array(arraysitu)
df['media'] = np.array(media)


print('A média geral será: '+ mean(media))
print('A maior média será '+maiormedia)
print('A maior quantidade de faltas será '+maiorfaltas)

df.to_csv('alunos_situacao.csv')

## print(df.situacao(("Aprovado")))