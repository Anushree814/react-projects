import { ListGroup } from "react-bootstrap";
import Mail from "./Mail";

// const sortMails = (mails, ascending) => {
//   return quotes.sort((quoteA, quoteB) => {
//     if (ascending) {
//       return quoteA.id > quoteB.id ? 1 : -1;
//     } else {
//       return quoteA.id < quoteB.id ? 1 : -1;
//     }
//   });
// };

const MailList = (props) => {
  const mails = props.mails;

  return (
    <div>
      <ListGroup variant="flush">
        {mails.map((mail) => (
          <ListGroup.Item>
            <Mail
              key={mail.sentBy}
              sentBy={mail.sentBy}
              category={mail.category}
              subject={mail.subject}
              hasAttachment={mail.hasAttachment}
              date={mail.date}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MailList;
