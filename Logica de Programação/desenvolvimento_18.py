numcomplex Data {
    complex x ;
    x = complex(1,2);
    y = complex(2,3);
    z = complex(3,4);

    int soma(){
    w = x + y - z;}
    int multdiv(){
    v = (x*y)/z;}

    print('A parte real de x será: '+x.real);
    print('A parte imaginária de x será: '+x.imag);
    print('A parte real de y será: '+y.real);
    print('A parte imaginária de y será: '+y.imag);
    print('A parte real de z será: '+z.real);
    print('A parte imaginária de z será: '+z.imag);
}