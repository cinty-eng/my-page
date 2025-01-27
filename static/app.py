from flask import flask, render_template,request,flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Mail(app)
@app.route('/send_email', mwthods=['POST'])
def send_email():
    try:
        nombre = request.form['nombre']
        correo = request.form['correo']
        mensaje = request.form['Message']

        #Crear el mesaje de correo
        msg=Message('Nuevo mensaje de contacto',
                    sender=app.config['MAIL_USERNAME'],
                    recipients=[app.config['MAIL_USERNAME']])
        msg.body = f"Nombre: {nombre}\nMensaje: {mensaje}"

        # Enviar el mesaje
        mail.send(msg)
        flash("Mensaje enviado correctamente,","success")
    except Exception as e:
        print(f"Error:{e}")
        flash("Ocurrio un error al enviar el mesaje. Debes ntenar de nuevo mas tarde.", "danger")

        return render_template('index.html')
    if _name_=="_main_":
        app.run(debug=true)