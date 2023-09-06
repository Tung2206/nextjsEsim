

import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    "id": 1,
    "title": "Việt Nam",
    "country_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
    "listdata": [
      {
        "id": 1,
        "logo": "https://play-lh.googleusercontent.com/9sg4VmivEYe_A6LydA_H9JlV_TgXAvTwgyngONk9FCqf3J00Qi_xieqVouxejFwe504",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "data_gb": "10GB",
        "validity": "60 DAYS",
        "price_gb": "$2.00",
        "price": "$2.00",
        "showDataPopular": "Yes",
        "single_data": [
          {
            "id": 1,
            "nameSingleData": "MobiMatter",
            "description": "RedteaGO offers dynamic eSIMs covering 100+ countries to enable easier overseas trips for users and is inviting new users to try eSIM with $1 for 1GB 15days, get started now!",
            "link_website": "https://www.facebook.com/",
            "name_plans": "eSIM data plans for France",
            "single_country_plans": "Single -country plans",
            "list_single_data_plans": [
              {
                "single_name_country": "France",
                "single_data_day": "2GB / 30 Days",
                "single_price": "$17.40",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call",
                "plan_details": [
                  {
                   "plan_infomation": "Enjoy 3 GB of data for 30 day(s) in France.",
                   "plan_list_country":[
                       {
                         "image_plan_country": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Japanese_flag_rounded.svg/2048px-Japanese_flag_rounded.svg.png",
                         "name_plan_country":"Japan"
                       },
                       {
                         "image_plan_country": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
                         "name_plan_country":"Korea"
                       },
                       {
                         "image_plan_country": "https://tulieuvankien.dangcongsan.vn/Uploads/2018/6/2/17/qu%E1%BB%91c-k%E1%BB%B3-trung-qu%E1%BB%91c.svg.png",
                         "name_plan_country":"China"
                       }
                     ]
                  }
               ]
              },
              {
                "single_name_country": "France",
                "single_data_day": "6GB / 30 Days",
                "single_price": "$24.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "5GB / 30 Days",
                "single_price": "$23.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "5GB / 30 Days",
                "single_price": "$23.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              }
            ],
            "multiple_country_plans": "Multiple-country plans",
            "multiple_single_data_plans": [
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              }
            ]

          }
        ]
      },
      {
        "id": 2,
        "logo": "https://play-lh.googleusercontent.com/9sg4VmivEYe_A6LydA_H9JlV_TgXAvTwgyngONk9FCqf3J00Qi_xieqVouxejFwe504",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "30 DAYS",
        "price_gb": "$2.00",
        "price": "$2.00",
        "showDataPopular": "Yes",
        "single_data": [
          {
            "id": 1,
            "nameSingleData": "MobiMatter",
            "description": "RedteaGO offers dynamic eSIMs covering 100+ countries to enable easier overseas trips for users and is inviting new users to try eSIM with $1 for 1GB 15days, get started now!",
            "link_website": "https://www.facebook.com/",
            "name_plans": "eSIM data plans for France",
            "single_country_plans": "Single -country plans",
            "list_single_data_plans": [
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              }
            ],
            "multiple_country_plans": "Multiple-country plans",
            "multiple_single_data_plans": [
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              }
            ]

          }
        ]
      },
      {
        "id": 3,
        "logo": "https://play-lh.googleusercontent.com/9sg4VmivEYe_A6LydA_H9JlV_TgXAvTwgyngONk9FCqf3J00Qi_xieqVouxejFwe504",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "10 DAYS",
        "price_gb": "$2.00",
        "price": "$2.00",
        "showDataPopular": "Yes",
        "single_data": [
          {
            "id": 1,
            "nameSingleData": "MobiMatter",
            "description": "RedteaGO offers dynamic eSIMs covering 100+ countries to enable easier overseas trips for users and is inviting new users to try eSIM with $1 for 1GB 15days, get started now!",
            "link_website": "https://www.facebook.com/",
            "name_plans": "eSIM data plans for France",
            "single_country_plans": "Single -country plans",
            "list_single_data_plans": [
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              }
            ],
            "multiple_country_plans": "Multiple-country plans",
            "multiple_single_data_plans": [
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              }
            ]

          }
        ]
      },
      {
        "listDataID": 4,
        "logo": "https://play-lh.googleusercontent.com/9sg4VmivEYe_A6LydA_H9JlV_TgXAvTwgyngONk9FCqf3J00Qi_xieqVouxejFwe504",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "30 DAYS",
        "price_gb": "$2.00",
        "price": "$2.00",
        "showDataPopular": "Yes",
        "single_data": [
          {
            "singleData_ID": 1,
            "nameSingleData": "MobiMatter",
            "description": "RedteaGO offers dynamic eSIMs covering 100+ countries to enable easier overseas trips for users and is inviting new users to try eSIM with $1 for 1GB 15days, get started now!",
            "link_website": "https://www.facebook.com/",
            "name_plans": "eSIM data plans for France",
            "single_country_plans": "Single -country plans",
            "list_single_data_plans": [
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              }
            ],
            "multiple_country_plans": "Multiple-country plans",
            "multiple_single_data_plans": [
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              }
            ]

          }
        ]
      },
      {
        "id": 5,
        "logo": "https://play-lh.googleusercontent.com/9sg4VmivEYe_A6LydA_H9JlV_TgXAvTwgyngONk9FCqf3J00Qi_xieqVouxejFwe504",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "20 DAYS",
        "price_gb": "$2.00",
        "price": "$2.00",
        "showDataPopular": "Yes",
        "single_data": [
          {
            "id": 1,
            "nameSingleData": "MobiMatter",
            "description": "RedteaGO offers dynamic eSIMs covering 100+ countries to enable easier overseas trips for users and is inviting new users to try eSIM with $1 for 1GB 15days, get started now!",
            "link_website": "https://www.facebook.com/",
            "name_plans": "eSIM data plans for France",
            "single_country_plans": "Single -country plans",
            "list_single_data_plans": [
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call",
                "plan_details": [
                   {
                    "plan_infomation": "Enjoy 3 GB of data for 30 day(s) in France.",
                    "plan_list_country":[
                        {
                          "image_plan_country": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Japanese_flag_rounded.svg/2048px-Japanese_flag_rounded.svg.png",
                          "name_plan_country":"Japan"
                        },
                        {
                          "image_plan_country": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
                          "name_plan_country":"Korea"
                        },
                        {
                          "image_plan_country": "https://tulieuvankien.dangcongsan.vn/Uploads/2018/6/2/17/qu%E1%BB%91c-k%E1%BB%B3-trung-qu%E1%BB%91c.svg.png",
                          "name_plan_country":"China"
                        }
                      ]
                   }
                ]
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              },
              {
                "single_name_country": "France",
                "single_data_day": "3GB / 30 Days",
                "single_price": "$8.00",
                "single_description": "Cancel anytime after 3 months",
                "single_list_option_1": "Subscription",
                "single_list_option_2": "SMS",
                "single_list_option_3": "Call"
              }
            ],
            "multiple_country_plans": "Multiple-country plans",
            "multiple_single_data_plans": [
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              },
              {
                "multiple_name_country": "France",
                "multiple_data_day": "3GB / 30 Days",
                "multiple_price": "$8.00",
                "multiple_description": "Cancel anytime after 3 months",
                "multiple_list_option_1": "Subscription",
                "multiple_list_option_2": "SMS",
                "multiple_list_option_3": "Call"
              }
            ]

          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Japan",
    "country_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Japanese_flag_rounded.svg/2048px-Japanese_flag_rounded.svg.png",
    "listdata": [
      {
        "logo": "images/ubigi.png",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "30 DAYS",
        "data_gb": "20GB",
        "price_gb": "$2.00",
        "price": "$2.00"
      }
    ]
  },
  {
    "id": 3,
    "title": "Korea",
    "country_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
    "listdata": [
      {
        "logo": "images/ubigi.png",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "30 DAYS",
        "data_gb": "10GB",
        "price_gb": "$2.00",
        "price": "$2.00"
      }
    ]
  },
  {
    "id": 4,
    "title": "USA",
    "country_image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg",
    "listdata": [
      {
        "logo": "images/ubigi.png",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "30 DAYS",
        "price_gb": "$2.00",
        "price": "$2.00"
      }
    ]
  },
  {
    "id": 5,
    "title": "China",
    "country_image_url": "https://tulieuvankien.dangcongsan.vn/Uploads/2018/6/2/17/qu%E1%BB%91c-k%E1%BB%B3-trung-qu%E1%BB%91c.svg.png",
    "listdata": [
      {
        "logo": "images/ubigi.png",
        "provider": "Ubigi",
        "plan_name": "Eroupe (36 countries)",
        "size": "Unimited",
        "validity": "30 DAYS",
        "price_gb": "$2.00",
        "data_gb": "20GB",
        "price": "$2.00"
      }
    ]
  }
]
export async function GET(request) {

  const url = new URL(request.url);

  return NextResponse.json({ "data": data }, { status: 200 });



}