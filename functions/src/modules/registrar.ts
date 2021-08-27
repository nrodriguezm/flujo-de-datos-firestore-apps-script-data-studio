import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

var db = admin.firestore();

export const agregarRegistro = functions.https.onRequest(async (req, res) => {

    functions.logger.info("agregarRegistro", {structuredData: true});

    // Grab the text parameter.
    const datos = req.query.text;

    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await db.collection('registros').add({
        nombre : datos,
    });

    // Send back a message that we've successfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});

});
