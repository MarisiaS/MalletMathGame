import random
import math

resultados = {}

## [target,[blocks],[blocksToEliminate]]

niveles ={
    0:[],
    1:[],
    2:[],
    3:[],
    4:[]
    }

## bloques que ya puse en algun nivel
bloquesUsados = set()

def sumas(numeros,acumulado):
    if len(numeros)==0:
        if acumulado in resultados:
            resultados[acumulado] += 1
        else:
            resultados[acumulado] = 1
    else:
        sumas(numeros[:-1],acumulado)
        sumas(numeros[:-1],acumulado+numeros[-1])
        
def sumaMaxima(numeros):
    resultado = 0
    for num in numeros:
        resultado += num
    return resultado

def generarBloques(n,superior,inferior):
    bloques = []
    while len(bloques)<n:
        agregar = random.randint(inferior,superior)
        if agregar not in bloques:
            bloques.append(agregar)
    return bloques

def quitar(datos,target):
    if target == 0:
        return datos
    if target < 0:
        return None
    if len(datos) == 0:
        return None
    no_agregar = quitar(datos[:-1],target)
    if no_agregar is None:
        return quitar(datos[:-1],target-datos[-1])
    else:
        no_agregar.append(datos[-1])
        return no_agregar

def generaCasos01(cantidad,superior,inferior):
    cantidad = cantidad + min(len(niveles[0]),len(niveles[1]))
    while len(niveles[0]) < cantidad and len(niveles[1]) < cantidad:
        ##generar los bloques
        bloques = generarBloques(3,superior,inferior)
        total = sumaMaxima(bloques)
        if total not in bloquesUsados:
            bloquesUsados.add(total)
            ##generar las diferentes sumas, en resultados se guardan
            global resultados
            sumas(bloques,0)
    
            for suma in resultados:
                if resultados[suma] == 1 and suma != 0 and suma != total:
                    por_quitar = quitar(bloques,suma)
                    if len(por_quitar)==2:
                        niveles[0].append([suma,bloques,por_quitar])
                    else:
                        niveles[1].append([suma,bloques,por_quitar])
                
        resultados = {}
    bloquesUsados.clear()
        
def generaCasos234(cantidad,superior,inferior):
    
    for i in range(2,5):
        cantidad = cantidad + len(niveles[i])
        while len(niveles[i]) < cantidad:
            ##generar los bloques
            bloques = generarBloques(2+i,superior,inferior)
            total = sumaMaxima(bloques)
            if total not in bloquesUsados:
                bloquesUsados.add(total)
                ##generar las diferentes sumas, en resultados se guardan
                global resultados
                sumas(bloques,0)
    
                for suma in resultados:
                    if resultados[suma] == 1 and suma != 0 and suma != total:
                        por_quitar = quitar(bloques,suma)
                        if len(por_quitar) < (i + 1) and len(por_quitar) > 1:
                            niveles[i].append([suma,bloques,por_quitar])
                
            resultados = {}
        bloquesUsados.clear()

def guardarArchivo():
    entrada = open("niveles.txt", "w")
    entrada.write("const niveles = {\n")
    for i in range(5):
        entrada.write(str(i) + " : " + str(niveles[i]) + ",\n")
    entrada.write("}\n")
    entrada.close()
    

generaCasos01(5,6,1)
generaCasos01(5,7,3)
generaCasos01(10,10,3)
generaCasos234(5,10,3)
generaCasos234(5,15,3)
generaCasos234(10,20,5)
guardarArchivo()

for i in range(5):
    print(i, len(niveles[i]))

