const FIREBASE_DOMAIN =
  "https://my-mailbox-6e6f1-default-rtdb.asia-southeast1.firebasedatabase.app/";
let transformedMails = [];
let currentUser = "";

export async function getMails(user) {
  currentUser = user;
  const response = await fetch(`${FIREBASE_DOMAIN}/${user}.json`);
  const data = await response.json();
  //console.log(data.mails);
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch mails.");
  }

  const transformedMails = [];

  for (const key in data.mails) {
    transformedMails.push(data.mails[key]);
  }

  
  return transformedMails;
}

async function getMail(user, mailKey) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${user}/mails/${mailKey}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch mail.");
  }

  const foundMail = {
    id: mailKey,
    ...data,
  };

  return foundMail;
}

export function showMail(user, mailKey) {
  let loadedMail;
  if (currentUser === user) {
    loadedMail = transformedMails[0].mails.find((m) => m.id === mailKey);
  } else {
    loadedMail = getMail(user, mailKey);
  }

  return loadedMail;
}

export async function addMail(mailData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/${mailData.sendTo}/mails.json`, {
    method: 'POST',
    body: JSON.stringify(mailData.newMail),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not add mail to receiver's inbox.");
  }

  const response2 = await fetch(`${FIREBASE_DOMAIN}/${mailData.newMail.sentBy}/sentMails.json`, {
    method: 'POST',
    body: JSON.stringify(mailData.newMail),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response2.ok) {
    throw new Error(data.message || "Could not add mail to sender's sent items.");
  }
  return data.status;
}

export async function getSentMails(user) {
    
    const response = await fetch(`${FIREBASE_DOMAIN}/${user}/sentMails.json`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch mails.");
    }
  
    const transformedMails = [];
  
    for (const key in data) {
      transformedMails.push(data[key]);
    }
  
    
    return transformedMails;
  }
  