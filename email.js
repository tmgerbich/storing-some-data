let appData = {
    name: 'Gmail',
    mailboxes: [
        {
            name: 'inbox',
            emails: [
                {
                    select: false, 
                    sentBy: 'tstraub@gmail.com',
                    subjectLine: 'New computer information', 
                    beginningText: 'I\'m sending the specs for the...',
                    timeReceived: 'Tue Jun 11 2024 10:05:20',
                    read: true,
                    replied: false,
                    attachment: true
                },
                {
                    select: false, 
                    sentBy: 'sgranger@gmail.com',
                    subjectLine: 'Updated car insurance', 
                    beginningText: 'Here is the information for your...',
                    timeReceived: 'Mon Jun 10 2024 12:18:40',
                    read: true,
                    replied: true,
                    attachment: true
                },
            ]
        },
        {
            name: 'drafts',
            emails: [
                {
                    select: false, 
                    sendTo: 'tstraub@gmail.com',
                    subjectLine: 'Thanks!', 
                    beginningText: 'Appreciate the info...',
                    timeSaved: 'Tue Jun 11 2024 11:03:14',
                    sent: false,
                    attachment: false
                }
            ]
        },
        {
            name: 'sent',
            emails: [
                {
                    select: false, 
                    sendTo: 'sgranger@gmail.com',
                    subjectLine: 'More info', 
                    beginningText: 'Can you please follow up on...',
                    timeSaved: 'Mon Jun 10 2024 20:13:19',
                    attachment: false
                }
            ]
        },
        {
            name: 'spam',
            emails: [
                {
                    select: false, 
                    sentBy: 'fakeprince@gmail.com',
                    subjectLine: 'Get rich fast!!', 
                    beginningText: 'Check out this great opportunity!!',
                    timeReceived: 'Sun Jun 9 2024 02:55:20',
                    read: false,
                    replied: false,
                    attachment: false
                }
            ]
        },
    ],
    contacts: [
        {
            firstName: 'Tim', 
            lastName: 'Straub', 
            email: 'tstraub@gmail.com',
            lastMessage: 'I\'m sending the specs for the...'
        },
        {
            firstName: 'Stan', 
            lastName: 'Granger',
            email: 'sgranger@gmail.com',
            lastMessage: 'Here is the information for your...'
        }
    ]
}

// get mailboxes
for (let mailbox of appData.mailboxes){
    console.log(mailbox.name);
};

// get emails
for (let mailbox of appData.mailboxes){
    for (let email of mailbox.emails){
        console.log(email.subjectLine);
    }
};

// text of the second email in visible list
let array = [];
for (let mailbox of appData.mailboxes){
    for (let email of mailbox.emails){
        array.push(email.beginningText);
    }
};
console.log(array[1]);

// mark an email as sent
appData.mailboxes[1].emails[0].sent = true;

// add an email to draft
appData.mailboxes[1].emails.push(
    {
        select: false, 
        sendTo: 'fakeprince@gmail.com',
        subjectLine: 'This seems sus...', 
        beginningText: 'Are you being for real?...',
        timeSaved: 'Tue Jun 11 2024 11:33:14',
        sent: false,
        attachment: false   
    }
);