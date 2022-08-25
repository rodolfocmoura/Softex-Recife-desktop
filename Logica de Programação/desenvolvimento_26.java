//Primeiro colocaremos o endereço fisico que armazenara o fluxo de bytes:
FileOutputStream arquivoexemplo = new FileOutputStream (/pastaSoftex);
//Pra escrever o objeto de maneira serializado teremos:
ObjectOutputStream obj = new ObjectOutputStream (arquivoexemplo);
//Em seguida fazemos a serialização
obj.writeObject (objetoserializavel);
//Em seguida finalizamos e liberamos o arquivo:
objclose();
//Em seguida deserialização:
FileInputStream arquivoexemplo = new FileInputStream (/pastaSoftex);
//Em seguida instanciamos o objeto com referencia ao arquivo de dados serializados.
ObjectInputStream obj = new ObjectInputStream (arquivoexemplo);
//em seguida lemos o arquivo:
objetoserializavel obj.readObject();
obj.close();
return serializado;