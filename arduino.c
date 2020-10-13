#include <Servo.h>
Servo monservo;
void setup() {
    monservo.attach(9); // utilise la broche 9 pour le controle du servomoteur
    monservo. write (0);
    Serial.begin (9600);
}
void loop(){
    int valeur = analogRead(A0);
    int valeurl = analogRead(A1);
    int valeur2 = analogRead(A2);
    int valeur3 = analogRead(A3);
    Serial.println (String (valeur)+" "+String(valeurl)+" "+String(valeur2)+" "+String(valeur3));
    if(valeur<50 && evaleur1<50 && valeur2<50 && valeur3<50 ){
        monservo.write (180);
        delay (1000);
    } else {
        monservo.write (0);
        delay (1000);
    }
}
