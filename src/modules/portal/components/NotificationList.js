import { h } from "preact";
import Notification from "./Notification";

const NotificationList = () => {
  return (
    <div>
      <Notification
        notificationTitle="Een nieuwe locatie"
        notificationText="Jullie nieuwe locatie ligt bij het hoogste punt van Weert"
        time="22:09"
      />
      <Notification
        notificationTitle="Jullie zijn gespot!"
        notificationText="Spot-team 1 heeft jullie gespot! Jullie tijd zal verhoogd worden."
        time="22:03"
      />
      <Notification
        notificationTitle="Locatie bereikt"
        notificationText="Goedzo! Jullie hebben de volgende locatie bereikt. Jullie volgende hint: 'H'. Deze hint wordt aan jullie samenvatting toegevoegd."
        time="21:36"
      />
      <Notification
        notificationTitle="Jullie 1e locatie"
        notificationText="De eerste locatie die jullie zullen moeten bereiken is aangegeven in het kaartje hierboven."
        time="19:12"
      />
      <Notification
        notificationTitle="Let the games begin!"
        notificationText="Welkom in het Mobile Portal! Hier ontvang je belangerijke berichten om het extractiepunt te bereiken. Kijk maar eens rond en wacht op je eerste aanwijzing."
        time="19:00"
      />
    </div>
  );
};

export default NotificationList;
