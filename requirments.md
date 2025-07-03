# Requirments for P2PMemento

## Purpose:

The purpose of P2P Memento is to create a decentralised messaging app. The focus is to create an application where the message/data sent by the user is one, only accsabile by the person who is meant to recive it, and two no third party can access it either in transit, or at rest.

## General Description:

The app will allow users to login with their accounts using a variety of authneitcation methods. Account information i.e email, phone number etc. will be stored in a database so users can look up other users to start communication. For the duration of the communication, the messages sent back in forth will be cached by the users itself. This ensures that the users have complete ownership of their own data, but will prevent the chat history from being saved. Although a future a feature mean allow users (with their approval) to store their data to be stored in a server. The communication of the data will use end to end encryption, preventing any party except the users themselves to view the message.  


## Functional Requirments:

| ID   | Requirement             | Description                                                                 |
|------|-------------------------|-----------------------------------------------------------------------------|
| FR1  | User Authentication     | Users can log in using multiple authentication methods (email, phone, etc.).|
| FR2  | Account Management      | Users can create and manage their account with personal information.        |
| FR3  | User Lookup             | Users can search for and discover other users to initiate communication.    |
| FR4  | Users add other user    | Users add other freinds to keep contact and sned messages later on          |
| FR5  | Messaging               | Users can send and receive messages in real time.                           |
| FR6  | Local Caching           | Messages are cached locally on the user's device during communication.      |
| FR7  | Data Ownership          | Users retain ownership of messages; no server-side storage by default.      |
| FR8  | Optional Server Storage | Users may opt-in to store chat history on a server (future feature).        |
| FR9  | End-to-End Encryption   | Messages are protected using end-to-end encryption.                         |



## Non Functional Requirments:


| ID    | Requirement     | Description                                                                        |
|-------|-----------------|------------------------------------------------------------------------------------|
| NFR1  | Security         | Enforce encryption and secure authentication (e.g., 2FA, OAuth).                   |
| NFR2  | Privacy          | No default server storage; user consent required for data sharing.                |
| NFR3  | Performance      | Messaging should be fast and responsive; efficient local caching.                 |
| NFR4  | Scalability      | System should support a growing number of users and sessions.                     |
| NFR5  | Reliability      | Cached messages should persist during the session unless the app is closed.       |
| NFR6  | Maintainability  | System should support easy integration of future features.                        |
| NFR7  | Compliance       | Must comply with relevant data protection laws (e.g., GDPR).                      |
| NFR8  | Availability     | Core services (e.g., login, lookup) should have high uptime (e.g., 99.9%).        |
