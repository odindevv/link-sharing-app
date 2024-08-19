# Link Sharing App - Database Schema

This README provides an overview of the Firestore database schema for the Link Sharing App. The schema includes collections for users, links, and comments, detailing the structure and fields used in the application.

## Collections and Fields

### Users

- **userId**: `string` - Unique ID of the user.
- **username**: `string` - Username of the user.
- **email**: `string` - Email address of the user.
- **profilePicture**: `string` - URL of the user's profile picture.
- **createdAt**: `timestamp` - The date and time when the user was created.
- **bio**: `string` (optional) - A brief biography or description of the user.

### Links

- **linkId**: `string` - Unique ID of the link.
- **userId**: `string` - Reference to the user who shared the link.
- **title**: `string` - Title of the link.
- **url**: `string` - URL of the link.
- **description**: `string` - Description of the link.
- **tags**: `array of strings` - Tags to categorize the link.
- **createdAt**: `timestamp` - The date and time when the link was created.
- **likes**: `array of strings` - IDs of users who liked the link.
- **commentsCount**: `number` - Number of comments on the link.

### Comments

- **commentId**: `string` - Unique ID of the comment.
- **linkId**: `string` - Reference to the link the comment is associated with.
- **userId**: `string` - Reference to the user who made the comment.
- **content**: `string` - Content of the comment.
- **createdAt**: `timestamp` - The date and time when the comment was created.

## Getting Started

### Setting Up Firestore

1. **Create a Firebase project** and set up Firestore.
2. **Define collections and documents** according to the schema outlined above.
3. **Integrate Firestore** with your application to perform CRUD operations on these collections.

### Example Document Structure

#### Users Collection

```json
{
  "userId": "unique_user_id",
  "username": "john_doe",
  "email": "john.doe@example.com",
  "profilePicture": "https://example.com/profile.jpg",
  "createdAt": "2024-08-01T12:34:56Z",
  "bio": "Software developer and tech enthusiast."
},
{
  "linkId": "unique_link_id",
  "userId": "unique_user_id",
  "title": "Interesting Article",
  "url": "https://example.com/article",
  "description": "An article about interesting tech trends.",
  "tags": ["tech", "trends"],
  "createdAt": "2024-08-01T13:45:67Z",
  "likes": ["user_id1", "user_id2"],
  "commentsCount": 5
}

```
