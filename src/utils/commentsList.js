export const commentsList = [
  {
    "userId": 1,
    "userName": "John Doe",
    "userImage": "https://randomuser.me/api/portraits/men/1.jpg",
    "text": "This is the first comment",
    "replies": [
      {
        "userId": 2,
        "userName": "Jane Smith",
        "userImage": "https://randomuser.me/api/portraits/women/2.jpg",
        "text": "Reply to the first comment",
        "replies": [
          {
            "userId": 3,
            "userName": "Alice Johnson",
            "userImage": "https://randomuser.me/api/portraits/women/3.jpg",
            "text": "Reply to the first reply",
            "replies": [
              {
                "userId": 4,
                "userName": "Bob Brown",
                "userImage": "https://randomuser.me/api/portraits/men/4.jpg",
                "text": "Reply to the second reply",
                "replies": [
                  {
                    "userId": 5,
                    "userName": "Emily Wilson",
                    "userImage": "https://randomuser.me/api/portraits/women/5.jpg",
                    "text": "Reply to the third reply",
                    "replies": [
                      {
                        "userId": 6,
                        "userName": "Michael Clark",
                        "userImage": "https://randomuser.me/api/portraits/men/6.jpg",
                        "text": "Reply to the fourth reply",
                        "replies": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "userId": 71,
        "userName": "Emma White",
        "userImage": "https://randomuser.me/api/portraits/men/1.jpg",
        "text": "This is a reply without further replies",
        "replies": []
      },
      {
        "userId": 81,
        "userName": "Oliver Johnson",
        "userImage": "https://randomuser.me/api/portraits/men/8.jpg",
        "text": "This is another reply without further replies",
        "replies": []
      },
      {
        "userId": 91,
        "userName": "Sophia Brown",
        "userImage": "https://randomuser.me/api/portraits/women/9.jpg",
        "text": "This is a reply without further replies",
        "replies": []
      }
    ]
  },
  {
    "userId": 7,
    "userName": "Emma White",
    "userImage": "https://randomuser.me/api/portraits/women/7.jpg",
    "text": "This is the second comment",
    "replies": [
      {
        "userId": 8,
        "userName": "Oliver Johnson",
        "userImage": "https://randomuser.me/api/portraits/men/8.jpg",
        "text": "Reply to the second comment",
        "replies": [
          {
            "userId": 9,
            "userName": "Sophia Brown",
            "userImage": "https://randomuser.me/api/portraits/women/9.jpg",
            "text": "Reply to Oliver Johnson",
            "replies": []
          }
        ]
      }
    ]
  },
  {
    "userId": 10,
    "userName": "William Wilson",
    "userImage": "https://randomuser.me/api/portraits/men/10.jpg",
    "text": "This is the third comment",
    "replies": [
      {
        "userId": 11,
        "userName": "Isabella Taylor",
        "userImage": "https://randomuser.me/api/portraits/women/11.jpg",
        "text": "Reply to the third comment",
        "replies": []
      }
    ]
  }
];
