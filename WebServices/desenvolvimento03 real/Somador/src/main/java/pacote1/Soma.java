/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/EjbWebService.java to edit this template
 */
package pacote1;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.ejb.Stateless;

/**
 *
 * @author Rodolfo
 */
@WebService(serviceName = "Soma")
@Stateless()
public class Soma {

    
    
    @WebMethod(operationName = "Somar")
    public int Somar(@WebParam(name = "numero1") int numero1, @WebParam(name = "numero2") int numero2) {
        //TODO write your implementation code here:
        int result = numero1+numero2;
        return result;
    }
}
