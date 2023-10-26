import { Injectable } from '@angular/core';
import { Song } from '../models/Song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songList = [
    {
      "id": "171a95ee-d777-4c3c-b8fa-89ab55ebbd36",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Norbie Stoves",
      "numberOfStreams": 1458,
      "releaseYear": 1994,
      "durationInSeconds": 304
    },
    {
      "id": "50bf47ab-06c0-4ef8-82f7-9234c09c6df3",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Krishna Airdrie",
      "numberOfStreams": 4744,
      "releaseYear": 1990,
      "durationInSeconds": 68
    },
    {
      "id": "97125520-332d-4e2d-8e32-6c827597583e",
      "songName": "In blandit ultrices enim.",
      "artistName": "Liana Moakson",
      "numberOfStreams": 3922,
      "releaseYear": 2010,
      "durationInSeconds": 299
    },
    {
      "id": "2a66afdd-baf9-455d-a8c0-502866e7749c",
      "songName": "Ut tellus.",
      "artistName": "Allie Aslott",
      "numberOfStreams": 3060,
      "releaseYear": 1997,
      "durationInSeconds": 466
    },
    {
      "id": "ad6c8f9b-3bd7-4c6b-9f76-552978a36d2f",
      "songName": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "artistName": "Isis Skain",
      "numberOfStreams": 4963,
      "releaseYear": 2005,
      "durationInSeconds": 380
    },
    {
      "id": "8ebf92db-0cf2-4ed5-b63a-edecb815eeb5",
      "songName": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "artistName": "Nikolia Ishak",
      "numberOfStreams": 4747,
      "releaseYear": 2000,
      "durationInSeconds": 448
    },
    {
      "id": "529b0744-2bba-41b8-9eaa-c7caecdec4b4",
      "songName": "Suspendisse potenti.",
      "artistName": "Carlie Churm",
      "numberOfStreams": 707,
      "releaseYear": 2012,
      "durationInSeconds": 314
    },
    {
      "id": "3b16d4b4-7664-42e5-8cd2-cdce0b09eb35",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Indira Nibloe",
      "numberOfStreams": 3680,
      "releaseYear": 1985,
      "durationInSeconds": 265
    },
    {
      "id": "16330d4d-8842-424d-b06b-50727c1cd980",
      "songName": "Aenean lectus.",
      "artistName": "Vannie Gracewood",
      "numberOfStreams": 2120,
      "releaseYear": 2006,
      "durationInSeconds": 106
    },
    {
      "id": "3c1545e0-16bf-4065-9c00-e23881befdef",
      "songName": "Nulla facilisi.",
      "artistName": "Ferrel Sivorn",
      "numberOfStreams": 1489,
      "releaseYear": 2003,
      "durationInSeconds": 379
    },
    {
      "id": "44784870-887e-4729-9904-8825f897f1cb",
      "songName": "Morbi non lectus.",
      "artistName": "Mortie Gulleford",
      "numberOfStreams": 1358,
      "releaseYear": 1995,
      "durationInSeconds": 134
    },
    {
      "id": "f43fd916-0a98-414d-9a21-f98ee16e5453",
      "songName": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "artistName": "Conney Jurkiewicz",
      "numberOfStreams": 4076,
      "releaseYear": 2007,
      "durationInSeconds": 147
    },
    {
      "id": "5462d7a5-79c2-4f30-af1f-eecb12b1b2e8",
      "songName": "Sed accumsan felis.",
      "artistName": "Daffi Passion",
      "numberOfStreams": 3182,
      "releaseYear": 1993,
      "durationInSeconds": 328
    },
    {
      "id": "61c95b9b-f383-4727-89f1-8d0e0653e870",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Borg Laskey",
      "numberOfStreams": 1147,
      "releaseYear": 2007,
      "durationInSeconds": 110
    },
    {
      "id": "6217a5ee-4a6a-40e4-a845-5c197e310ea8",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Harriot Ganforth",
      "numberOfStreams": 3507,
      "releaseYear": 1980,
      "durationInSeconds": 215
    },
    {
      "id": "ff98cb2f-debe-493f-bd5b-f9deff15896d",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Lewie Pilbeam",
      "numberOfStreams": 1419,
      "releaseYear": 2013,
      "durationInSeconds": 479
    },
    {
      "id": "68403161-2b8e-4213-bb69-792f971e1fbd",
      "songName": "Cras non velit nec nisi vulputate nonummy.",
      "artistName": "Shandeigh Mabbot",
      "numberOfStreams": 3723,
      "releaseYear": 1999,
      "durationInSeconds": 132
    },
    {
      "id": "bd252b3d-9f1e-4ab4-aa04-5dd7015050d8",
      "songName": "Curabitur convallis.",
      "artistName": "Brinn Grouse",
      "numberOfStreams": 368,
      "releaseYear": 1985,
      "durationInSeconds": 87
    },
    {
      "id": "a6661548-3578-48e0-8667-3db63b3fca15",
      "songName": "Nulla tempus.",
      "artistName": "Sheree Arnott",
      "numberOfStreams": 3931,
      "releaseYear": 2002,
      "durationInSeconds": 31
    },
    {
      "id": "a9a9ea72-6fc2-4740-b5d5-4ee578ca7791",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Minnnie Gwilym",
      "numberOfStreams": 2089,
      "releaseYear": 2009,
      "durationInSeconds": 413
    },
    {
      "id": "05e40698-2252-4d1f-afda-5492c119a5bf",
      "songName": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "artistName": "Sidnee Gwilym",
      "numberOfStreams": 3799,
      "releaseYear": 2013,
      "durationInSeconds": 454
    },
    {
      "id": "bdbc6a0b-c27c-4474-8f31-cfe98e057d16",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Salomi Kemson",
      "numberOfStreams": 2687,
      "releaseYear": 1993,
      "durationInSeconds": 120
    },
    {
      "id": "3cbb52e0-dc75-481d-8b2f-f7759a9aaa4e",
      "songName": "Duis mattis egestas metus.",
      "artistName": "Ximenes Munnis",
      "numberOfStreams": 3828,
      "releaseYear": 1986,
      "durationInSeconds": 60
    },
    {
      "id": "c174836a-c318-410a-b77b-8465829cfcbc",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Jeanelle Greenard",
      "numberOfStreams": 3359,
      "releaseYear": 1974,
      "durationInSeconds": 43
    },
    {
      "id": "81966bb2-e654-4b4f-af10-81bbaa579bd0",
      "songName": "Ut tellus.",
      "artistName": "Theda Stirling",
      "numberOfStreams": 618,
      "releaseYear": 1992,
      "durationInSeconds": 349
    },
    {
      "id": "2cc0b8d6-9153-4e6b-884c-b94c39551c9d",
      "songName": "Etiam justo.",
      "artistName": "Reece Basillon",
      "numberOfStreams": 3539,
      "releaseYear": 1989,
      "durationInSeconds": 319
    },
    {
      "id": "5e9b3b02-38a0-477e-a68a-f7403171e995",
      "songName": "Ut tellus.",
      "artistName": "Allyn Gori",
      "numberOfStreams": 3289,
      "releaseYear": 1993,
      "durationInSeconds": 429
    },
    {
      "id": "0cef6aa6-236e-446d-91c0-762c2f5b9dbd",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "artistName": "Augusto Milberry",
      "numberOfStreams": 980,
      "releaseYear": 2008,
      "durationInSeconds": 206
    },
    {
      "id": "74fb1b3d-c4c4-4a97-af2a-49b68fdb26b3",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Ulises Collum",
      "numberOfStreams": 4077,
      "releaseYear": 2007,
      "durationInSeconds": 196
    },
    {
      "id": "6e27db59-03d1-4951-8690-1d041a77918f",
      "songName": "Phasellus id sapien in sapien iaculis congue.",
      "artistName": "Melinde Blackden",
      "numberOfStreams": 772,
      "releaseYear": 1992,
      "durationInSeconds": 446
    },
    {
      "id": "117cbac1-f38a-4cc9-80aa-f6b3c0209ad1",
      "songName": "Donec vitae nisi.",
      "artistName": "Vale Kelner",
      "numberOfStreams": 4285,
      "releaseYear": 2004,
      "durationInSeconds": 19
    },
    {
      "id": "f35a2af3-98d5-4dfb-84dc-e40c829d5dd4",
      "songName": "Morbi non quam nec dui luctus rutrum.",
      "artistName": "Aubine Stoyell",
      "numberOfStreams": 3241,
      "releaseYear": 2001,
      "durationInSeconds": 160
    },
    {
      "id": "14654d7a-dbba-44af-90ab-ee8bf59e0e90",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Elset Scutter",
      "numberOfStreams": 4252,
      "releaseYear": 2002,
      "durationInSeconds": 75
    },
    {
      "id": "fdaed0e0-393e-4244-89fc-a076ff208641",
      "songName": "Nulla ut erat id mauris vulputate elementum.",
      "artistName": "Dario Grinyakin",
      "numberOfStreams": 4437,
      "releaseYear": 1991,
      "durationInSeconds": 328
    },
    {
      "id": "0417c764-6fdd-4f75-b4aa-6e8b575799aa",
      "songName": "Etiam faucibus cursus urna.",
      "artistName": "Gretal Quinnette",
      "numberOfStreams": 304,
      "releaseYear": 2009,
      "durationInSeconds": 63
    },
    {
      "id": "68f46b09-3dfc-48e5-b05b-43cdefe667d0",
      "songName": "Nunc purus.",
      "artistName": "Zorina Biasini",
      "numberOfStreams": 1638,
      "releaseYear": 2009,
      "durationInSeconds": 360
    },
    {
      "id": "eeb4479f-9793-431b-b123-4369968feda0",
      "songName": "Nulla facilisi.",
      "artistName": "Silas Stapylton",
      "numberOfStreams": 3509,
      "releaseYear": 2006,
      "durationInSeconds": 81
    },
    {
      "id": "b2f15879-f200-44db-9380-08760866ebd0",
      "songName": "Nulla nisl.",
      "artistName": "Joyan Pietsma",
      "numberOfStreams": 1046,
      "releaseYear": 2008,
      "durationInSeconds": 299
    },
    {
      "id": "b3086ff2-e5fa-4eb5-8fbd-493db04baac6",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Bo Ravenscraft",
      "numberOfStreams": 2026,
      "releaseYear": 2001,
      "durationInSeconds": 307
    },
    {
      "id": "cdab8c80-47b3-477e-9c33-b5767cdc9b46",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Ulrikaumeko McCome",
      "numberOfStreams": 4525,
      "releaseYear": 2008,
      "durationInSeconds": 472
    },
    {
      "id": "f4611b66-72c2-4beb-9c91-530d143d7bc7",
      "songName": "Morbi ut odio.",
      "artistName": "Eustace Creamen",
      "numberOfStreams": 3195,
      "releaseYear": 1992,
      "durationInSeconds": 227
    },
    {
      "id": "f0880c44-e5d3-49c6-af1f-1d6887274857",
      "songName": "Etiam vel augue.",
      "artistName": "Kathe Shoebridge",
      "numberOfStreams": 3287,
      "releaseYear": 1989,
      "durationInSeconds": 254
    },
    {
      "id": "d3db92b9-e61c-4a8e-9592-be0c00f0acbb",
      "songName": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "artistName": "Moise Kibbye",
      "numberOfStreams": 4703,
      "releaseYear": 1999,
      "durationInSeconds": 449
    },
    {
      "id": "850230d1-dd33-4d03-8b1f-5773c4dc0755",
      "songName": "Nulla nisl.",
      "artistName": "Zabrina Todman",
      "numberOfStreams": 2192,
      "releaseYear": 1992,
      "durationInSeconds": 400
    },
    {
      "id": "37de5078-7d4c-42db-96ca-3240fb2d8d2b",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Lazaro McPheat",
      "numberOfStreams": 1785,
      "releaseYear": 1989,
      "durationInSeconds": 316
    },
    {
      "id": "9e3c483f-300d-4066-be82-366dc028fb34",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Dacey Laidel",
      "numberOfStreams": 4802,
      "releaseYear": 2009,
      "durationInSeconds": 104
    },
    {
      "id": "28018107-0b5b-4569-a77f-0e402e03c4af",
      "songName": "Suspendisse potenti.",
      "artistName": "Karola Ramsdell",
      "numberOfStreams": 4482,
      "releaseYear": 2008,
      "durationInSeconds": 270
    },
    {
      "id": "cca15f26-8420-494c-bfb8-a385acfc297c",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Eyde Pirozzi",
      "numberOfStreams": 2166,
      "releaseYear": 2011,
      "durationInSeconds": 474
    },
    {
      "id": "3bf9691c-6e4b-4b8d-b8da-9abb2ea1493a",
      "songName": "Pellentesque at nulla.",
      "artistName": "Joyann Pettiford",
      "numberOfStreams": 1798,
      "releaseYear": 1992,
      "durationInSeconds": 412
    },
    {
      "id": "f7015ade-6ece-43c5-8944-d8e1aebc903c",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "artistName": "Craggie Kiley",
      "numberOfStreams": 1479,
      "releaseYear": 2011,
      "durationInSeconds": 492
    },
    {
      "id": "191bb5c6-7f5a-42c9-a03d-9bec92ad9b79",
      "songName": "Cras pellentesque volutpat dui.",
      "artistName": "Horton Bilson",
      "numberOfStreams": 4353,
      "releaseYear": 1997,
      "durationInSeconds": 413
    },
    {
      "id": "c7344458-d6a9-4a75-9ed6-b9b3547baffe",
      "songName": "Morbi ut odio.",
      "artistName": "Randolf Tamburo",
      "numberOfStreams": 1188,
      "releaseYear": 1992,
      "durationInSeconds": 305
    },
    {
      "id": "14aec9c6-f1c5-4299-8421-72668d1830a2",
      "songName": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "artistName": "Betteann Sharrem",
      "numberOfStreams": 2838,
      "releaseYear": 2002,
      "durationInSeconds": 168
    },
    {
      "id": "b3b02aa3-2f0a-4ccf-8e75-2d7d83ff2966",
      "songName": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      "artistName": "Winthrop Maunders",
      "numberOfStreams": 2603,
      "releaseYear": 2003,
      "durationInSeconds": 23
    },
    {
      "id": "86f49162-de5d-4c84-bd5d-d649b9a9d74d",
      "songName": "Aliquam non mauris.",
      "artistName": "Elwin Poff",
      "numberOfStreams": 4992,
      "releaseYear": 1996,
      "durationInSeconds": 345
    },
    {
      "id": "bdaa29b9-4842-4736-8018-9f21aaa50456",
      "songName": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "artistName": "Janella Cobelli",
      "numberOfStreams": 1446,
      "releaseYear": 1997,
      "durationInSeconds": 425
    },
    {
      "id": "2a02fb4a-6b77-47ca-97cb-eb12fe91f8dd",
      "songName": "Sed sagittis.",
      "artistName": "Antonin Birchall",
      "numberOfStreams": 2782,
      "releaseYear": 2011,
      "durationInSeconds": 348
    },
    {
      "id": "45a3064f-0c09-4e83-ae31-bb8d1a5eee36",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Vasilis Guillem",
      "numberOfStreams": 2102,
      "releaseYear": 1991,
      "durationInSeconds": 328
    },
    {
      "id": "7bd5c49e-73db-4882-8539-99551cc88612",
      "songName": "Integer ac neque.",
      "artistName": "Melisande Martindale",
      "numberOfStreams": 1250,
      "releaseYear": 2012,
      "durationInSeconds": 42
    },
    {
      "id": "b41a874e-a4ec-4399-b953-dc0d45a42718",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Sioux Piscot",
      "numberOfStreams": 462,
      "releaseYear": 1997,
      "durationInSeconds": 405
    },
    {
      "id": "ef6185a7-22b0-4c8f-bdc9-f803fcbe4873",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Maurene Dunphy",
      "numberOfStreams": 2706,
      "releaseYear": 2001,
      "durationInSeconds": 117
    },
    {
      "id": "13613b2f-b494-47b4-a06d-347bb7fd32c3",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Spence Trownson",
      "numberOfStreams": 229,
      "releaseYear": 1999,
      "durationInSeconds": 314
    },
    {
      "id": "f87af0bc-3f58-4f89-a157-ef36bafc0029",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Kristal Catlette",
      "numberOfStreams": 1928,
      "releaseYear": 1995,
      "durationInSeconds": 170
    },
    {
      "id": "e40a5b0f-8021-4cb7-8dd9-f0bb3f3e9d73",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Pooh Flewan",
      "numberOfStreams": 542,
      "releaseYear": 2010,
      "durationInSeconds": 302
    },
    {
      "id": "042a0f19-e2f5-4875-a9a9-4fa4fd96d00b",
      "songName": "Nulla justo.",
      "artistName": "Clarey Josskowitz",
      "numberOfStreams": 3826,
      "releaseYear": 1998,
      "durationInSeconds": 499
    },
    {
      "id": "3b2af170-a75c-4a30-9cd3-3490f5f20756",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Danny Vaudin",
      "numberOfStreams": 3047,
      "releaseYear": 1997,
      "durationInSeconds": 396
    },
    {
      "id": "6045804d-369b-4561-bd05-e4d5b8db6942",
      "songName": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "artistName": "Blanche Madden",
      "numberOfStreams": 4560,
      "releaseYear": 2002,
      "durationInSeconds": 174
    },
    {
      "id": "2210fe31-4403-45b7-9756-7a125a5f4c93",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Kelby Snodden",
      "numberOfStreams": 2812,
      "releaseYear": 2011,
      "durationInSeconds": 273
    },
    {
      "id": "6e467f88-7b0e-450c-aaf0-f6382186845e",
      "songName": "Morbi non lectus.",
      "artistName": "Felic Aronstam",
      "numberOfStreams": 3739,
      "releaseYear": 1996,
      "durationInSeconds": 382
    },
    {
      "id": "5e2a8b0d-bbb0-4981-95f8-38a5f4c8334e",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Marlyn Boon",
      "numberOfStreams": 573,
      "releaseYear": 2006,
      "durationInSeconds": 52
    },
    {
      "id": "a5096854-c5be-4f29-9e5c-8c0cc96bae1c",
      "songName": "Curabitur convallis.",
      "artistName": "Darell Crownshaw",
      "numberOfStreams": 2906,
      "releaseYear": 1980,
      "durationInSeconds": 368
    },
    {
      "id": "4d4ef597-c9c1-4b71-8181-a5d351388d0e",
      "songName": "Nulla facilisi.",
      "artistName": "Sharity Elcum",
      "numberOfStreams": 1694,
      "releaseYear": 1997,
      "durationInSeconds": 294
    },
    {
      "id": "74d6637b-d3a1-4700-b092-8f0e6afbae85",
      "songName": "Donec vitae nisi.",
      "artistName": "Lyn Gornall",
      "numberOfStreams": 1505,
      "releaseYear": 2001,
      "durationInSeconds": 244
    },
    {
      "id": "a6c58815-d239-44bf-9d25-d9929449bef8",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Evelyn Kassel",
      "numberOfStreams": 363,
      "releaseYear": 1990,
      "durationInSeconds": 380
    },
    {
      "id": "37bf8c8a-2ce5-4c6d-9981-63342f8849da",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Manya Leuty",
      "numberOfStreams": 4170,
      "releaseYear": 1992,
      "durationInSeconds": 177
    },
    {
      "id": "bf938940-730c-45b0-b616-b7531cdc1807",
      "songName": "In eleifend quam a odio.",
      "artistName": "Jabez Manuello",
      "numberOfStreams": 2237,
      "releaseYear": 2004,
      "durationInSeconds": 209
    },
    {
      "id": "da93a8a9-b50d-44da-ad86-573796a285cf",
      "songName": "Proin at turpis a pede posuere nonummy.",
      "artistName": "Libbey Knights",
      "numberOfStreams": 2853,
      "releaseYear": 2004,
      "durationInSeconds": 445
    },
    {
      "id": "e61d090f-1806-4ee4-9549-0b899da84275",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Malynda Simonnot",
      "numberOfStreams": 3611,
      "releaseYear": 2012,
      "durationInSeconds": 144
    },
    {
      "id": "a22b70ae-3f07-40f6-a96e-b81a63d577c2",
      "songName": "Vivamus vestibulum sagittis sapien.",
      "artistName": "Armando Elsie",
      "numberOfStreams": 3499,
      "releaseYear": 2009,
      "durationInSeconds": 199
    },
    {
      "id": "c0b90416-5eae-4f49-ac8b-0a1821d1de5d",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Kristan Stormouth",
      "numberOfStreams": 2332,
      "releaseYear": 2003,
      "durationInSeconds": 214
    },
    {
      "id": "30fcd8b6-f374-48e8-a691-3b3935bb2594",
      "songName": "Aenean lectus.",
      "artistName": "Roselle Hause",
      "numberOfStreams": 4787,
      "releaseYear": 2009,
      "durationInSeconds": 14
    },
    {
      "id": "424f6d29-5f70-468f-bcae-4eac9f4f9224",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Kelbee Cuddihy",
      "numberOfStreams": 3494,
      "releaseYear": 1986,
      "durationInSeconds": 430
    },
    {
      "id": "14fafa2b-9a4d-4c08-820c-17f3e1c32071",
      "songName": "Aenean lectus.",
      "artistName": "Donal Woolbrook",
      "numberOfStreams": 3199,
      "releaseYear": 2009,
      "durationInSeconds": 50
    },
    {
      "id": "5d24a4de-1fdc-4b74-b885-1fe206577395",
      "songName": "Morbi ut odio.",
      "artistName": "Brig Feak",
      "numberOfStreams": 568,
      "releaseYear": 2009,
      "durationInSeconds": 213
    },
    {
      "id": "454b40f1-06af-4c9d-ad0f-c1da95675444",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Langsdon Neachell",
      "numberOfStreams": 4570,
      "releaseYear": 1989,
      "durationInSeconds": 13
    },
    {
      "id": "88a4f5cb-e1d0-4ce4-9112-4e5ea9675550",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Fowler Brymham",
      "numberOfStreams": 865,
      "releaseYear": 2013,
      "durationInSeconds": 182
    },
    {
      "id": "4a8c875a-4c03-4407-8201-e90d305a8932",
      "songName": "Curabitur convallis.",
      "artistName": "Ezechiel Batiste",
      "numberOfStreams": 3863,
      "releaseYear": 2001,
      "durationInSeconds": 194
    },
    {
      "id": "af129ab7-b252-4d1b-a082-45b1afa806d9",
      "songName": "In quis justo.",
      "artistName": "Killy Bottini",
      "numberOfStreams": 4056,
      "releaseYear": 1995,
      "durationInSeconds": 498
    },
    {
      "id": "47e357bd-8283-4dfc-9923-fff701195851",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Rebe Emmins",
      "numberOfStreams": 2528,
      "releaseYear": 2011,
      "durationInSeconds": 19
    },
    {
      "id": "9f77af7a-492d-4690-ab44-2093e0faed26",
      "songName": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "artistName": "Danya Renault",
      "numberOfStreams": 2751,
      "releaseYear": 2012,
      "durationInSeconds": 234
    },
    {
      "id": "53a2750e-2d39-4fb1-9096-1b20c75ffe48",
      "songName": "Integer ac leo.",
      "artistName": "Lacee Tyre",
      "numberOfStreams": 966,
      "releaseYear": 2011,
      "durationInSeconds": 229
    },
    {
      "id": "6b2a6f29-8112-4294-855c-89fc93badfc2",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Rosene Calrow",
      "numberOfStreams": 1567,
      "releaseYear": 2000,
      "durationInSeconds": 478
    },
    {
      "id": "00b9c574-f966-4652-ab3e-dbaec7479452",
      "songName": "Nunc purus.",
      "artistName": "Judith Peron",
      "numberOfStreams": 2044,
      "releaseYear": 2009,
      "durationInSeconds": 81
    },
    {
      "id": "44469cf7-8087-45a3-8f78-76b53b57a1a6",
      "songName": "Ut tellus.",
      "artistName": "Gustaf Bywaters",
      "numberOfStreams": 3458,
      "releaseYear": 1984,
      "durationInSeconds": 386
    },
    {
      "id": "d48260cb-c006-4f24-877d-be89cc275ef3",
      "songName": "Cras non velit nec nisi vulputate nonummy.",
      "artistName": "Rozalie Dade",
      "numberOfStreams": 4903,
      "releaseYear": 1998,
      "durationInSeconds": 123
    },
    {
      "id": "060eeb4d-cab7-4acf-a4e6-8aaae6fd907d",
      "songName": "Praesent lectus.",
      "artistName": "Kirsti Barbery",
      "numberOfStreams": 276,
      "releaseYear": 2010,
      "durationInSeconds": 89
    },
    {
      "id": "e2c03eaf-249c-498c-9b76-2d9d7e25f95b",
      "songName": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "artistName": "Ab Josskovitz",
      "numberOfStreams": 4616,
      "releaseYear": 1999,
      "durationInSeconds": 117
    },
    {
      "id": "83f50a2f-c28c-4f39-b446-68b32777650f",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Kellia Lepick",
      "numberOfStreams": 3647,
      "releaseYear": 2005,
      "durationInSeconds": 393
    },
    {
      "id": "516d97a7-dd5e-487b-ae91-415395ba644b",
      "songName": "Integer ac neque.",
      "artistName": "Gib Dillway",
      "numberOfStreams": 4384,
      "releaseYear": 1965,
      "durationInSeconds": 154
    },
    {
      "id": "e41588f9-2600-4f78-819b-23f67dbb57df",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Moll Ineson",
      "numberOfStreams": 410,
      "releaseYear": 2001,
      "durationInSeconds": 264
    },
    {
      "id": "86fea568-7864-4e97-badf-35dcac15aef9",
      "songName": "In congue.",
      "artistName": "Christi Thow",
      "numberOfStreams": 2256,
      "releaseYear": 2012,
      "durationInSeconds": 6
    },
    {
      "id": "e9ec3669-2b28-4c6f-a726-468e8d65b6ec",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Dare Everson",
      "numberOfStreams": 425,
      "releaseYear": 2003,
      "durationInSeconds": 210
    },
    {
      "id": "11281421-b0a4-4d1a-a50e-b0d3354040ee",
      "songName": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "artistName": "Breanne Wyson",
      "numberOfStreams": 2499,
      "releaseYear": 1995,
      "durationInSeconds": 61
    },
    {
      "id": "fe7db4a7-cdd6-4005-aea5-b1b8093c00b3",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Vlad Da Costa",
      "numberOfStreams": 3907,
      "releaseYear": 1997,
      "durationInSeconds": 70
    },
    {
      "id": "96210b30-471b-43e1-886b-a4d6bb9fa6f3",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Cullen Menere",
      "numberOfStreams": 91,
      "releaseYear": 1995,
      "durationInSeconds": 184
    },
    {
      "id": "fd487b2d-73bc-4ab4-ad84-a8c3f67071ff",
      "songName": "Integer a nibh.",
      "artistName": "Cullie Purkins",
      "numberOfStreams": 1694,
      "releaseYear": 1998,
      "durationInSeconds": 254
    },
    {
      "id": "422b99e1-09d0-4f04-9287-e4e4a98534bf",
      "songName": "Curabitur convallis.",
      "artistName": "Willabella Lapidus",
      "numberOfStreams": 3659,
      "releaseYear": 2010,
      "durationInSeconds": 78
    },
    {
      "id": "2f1c06e6-c687-40be-9424-22a5ad298b89",
      "songName": "Mauris lacinia sapien quis libero.",
      "artistName": "My Lochrie",
      "numberOfStreams": 962,
      "releaseYear": 1995,
      "durationInSeconds": 193
    },
    {
      "id": "b002cbac-97a9-4465-98a7-8237047662b6",
      "songName": "Integer non velit.",
      "artistName": "Carmine Toll",
      "numberOfStreams": 121,
      "releaseYear": 1993,
      "durationInSeconds": 453
    },
    {
      "id": "297903d3-bccb-4d0d-8277-93b433e1f083",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Alanah Charopen",
      "numberOfStreams": 599,
      "releaseYear": 1990,
      "durationInSeconds": 466
    },
    {
      "id": "88943594-c4ef-4443-8060-ba876b7c4ec2",
      "songName": "Donec vitae nisi.",
      "artistName": "Barry Banbury",
      "numberOfStreams": 4505,
      "releaseYear": 1969,
      "durationInSeconds": 112
    },
    {
      "id": "7ed9c13b-5eb0-47ce-a01f-e99c552c86c7",
      "songName": "Morbi non lectus.",
      "artistName": "Ray Golightly",
      "numberOfStreams": 2002,
      "releaseYear": 1991,
      "durationInSeconds": 24
    },
    {
      "id": "3da3db19-8362-47ed-a0ca-4280d86ac64a",
      "songName": "Aenean lectus.",
      "artistName": "Brock Jacobovitch",
      "numberOfStreams": 2261,
      "releaseYear": 1967,
      "durationInSeconds": 256
    },
    {
      "id": "32995e01-1242-4006-bb42-373fd48129f3",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Adlai Conkie",
      "numberOfStreams": 1401,
      "releaseYear": 2008,
      "durationInSeconds": 475
    },
    {
      "id": "b7683075-92bc-4ccd-a99b-cd041c979a89",
      "songName": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "artistName": "Maynord Priden",
      "numberOfStreams": 4351,
      "releaseYear": 2003,
      "durationInSeconds": 271
    },
    {
      "id": "448a4e1e-6b2c-4ffb-bc3e-2d695a9cac80",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Lark Swindells",
      "numberOfStreams": 2153,
      "releaseYear": 1994,
      "durationInSeconds": 316
    },
    {
      "id": "591dcf2f-09bc-4c8e-91f8-8e3278525d38",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Egbert Lindblom",
      "numberOfStreams": 3938,
      "releaseYear": 2007,
      "durationInSeconds": 361
    },
    {
      "id": "35e251b7-e560-4eb7-92e1-2baffc9ce436",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Alexina Tollet",
      "numberOfStreams": 3135,
      "releaseYear": 1992,
      "durationInSeconds": 323
    },
    {
      "id": "9ef5fae7-41ac-4f88-84bd-c2485dd86c3b",
      "songName": "Aliquam non mauris.",
      "artistName": "Michaella Scholard",
      "numberOfStreams": 4443,
      "releaseYear": 1992,
      "durationInSeconds": 154
    },
    {
      "id": "715c28b0-8a70-4cd8-87e5-fc73fe9b88b9",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Otha Mosen",
      "numberOfStreams": 4298,
      "releaseYear": 1992,
      "durationInSeconds": 264
    },
    {
      "id": "72418ef8-04f6-45ef-93e6-f2e77f417fb2",
      "songName": "Sed ante.",
      "artistName": "Kennett Greatham",
      "numberOfStreams": 773,
      "releaseYear": 1990,
      "durationInSeconds": 263
    },
    {
      "id": "4ce15f80-0090-43a7-aeb5-b70ab3181bfc",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Tiff Precious",
      "numberOfStreams": 2369,
      "releaseYear": 1992,
      "durationInSeconds": 338
    },
    {
      "id": "fd5ba1ad-4d37-4d73-bae3-d4e62ad546b8",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Tina Coucha",
      "numberOfStreams": 1724,
      "releaseYear": 1985,
      "durationInSeconds": 62
    },
    {
      "id": "2706743a-3a06-45f0-87a1-1de25bf53e69",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Davy Liddy",
      "numberOfStreams": 3524,
      "releaseYear": 1994,
      "durationInSeconds": 321
    },
    {
      "id": "43ace35d-fb8b-4968-8006-4f081eaf21e1",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Jules Marxsen",
      "numberOfStreams": 2021,
      "releaseYear": 1998,
      "durationInSeconds": 475
    },
    {
      "id": "9d85cbbc-2fd2-43be-a949-37e43fca2e06",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "artistName": "Libbi Fauguel",
      "numberOfStreams": 2660,
      "releaseYear": 1997,
      "durationInSeconds": 152
    },
    {
      "id": "868745ae-0ec2-4169-a4cf-dcfcf44c41d9",
      "songName": "Curabitur convallis.",
      "artistName": "Wilone Pharaoh",
      "numberOfStreams": 4945,
      "releaseYear": 1990,
      "durationInSeconds": 39
    },
    {
      "id": "c29cc61b-5ba8-4eff-85e1-6f0537277352",
      "songName": "Nam nulla.",
      "artistName": "Ingelbert Hendrickx",
      "numberOfStreams": 958,
      "releaseYear": 1992,
      "durationInSeconds": 480
    },
    {
      "id": "d3ea1599-d9d2-4f4a-a700-a385b5623e31",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Derrick Neubigging",
      "numberOfStreams": 1365,
      "releaseYear": 1985,
      "durationInSeconds": 157
    },
    {
      "id": "d599629c-0a20-442d-b3b3-feb04e491666",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Sal Cuttle",
      "numberOfStreams": 551,
      "releaseYear": 2000,
      "durationInSeconds": 395
    },
    {
      "id": "23461f7b-cd7d-41fe-b379-89745e118300",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Albrecht Reach",
      "numberOfStreams": 4043,
      "releaseYear": 1992,
      "durationInSeconds": 156
    },
    {
      "id": "226b615d-dc3c-449b-a9c6-908e511bcd96",
      "songName": "Mauris sit amet eros.",
      "artistName": "Charmaine Eakin",
      "numberOfStreams": 2929,
      "releaseYear": 2008,
      "durationInSeconds": 497
    },
    {
      "id": "fb65b4ee-d299-40ee-8873-09f630857bf0",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Erich Flacke",
      "numberOfStreams": 322,
      "releaseYear": 2012,
      "durationInSeconds": 463
    },
    {
      "id": "9e532471-f939-456d-9b61-4038d97920ca",
      "songName": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "artistName": "Nappy Warton",
      "numberOfStreams": 35,
      "releaseYear": 2007,
      "durationInSeconds": 119
    },
    {
      "id": "d46b2070-17c5-4be7-ba1a-12982537e789",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Toma Branchet",
      "numberOfStreams": 2496,
      "releaseYear": 2004,
      "durationInSeconds": 45
    },
    {
      "id": "366c8209-223e-4a48-95c8-741f280dcdcb",
      "songName": "Ut tellus.",
      "artistName": "Alane Pallatina",
      "numberOfStreams": 1276,
      "releaseYear": 1987,
      "durationInSeconds": 100
    },
    {
      "id": "57ecb1ad-2f4d-41b7-83b4-21944b421da3",
      "songName": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "artistName": "Tracey Tallach",
      "numberOfStreams": 1273,
      "releaseYear": 1996,
      "durationInSeconds": 285
    },
    {
      "id": "a8c6f3fd-169b-48f9-a0e6-49c620f80ccf",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Cal Eldridge",
      "numberOfStreams": 991,
      "releaseYear": 1994,
      "durationInSeconds": 480
    },
    {
      "id": "6e2664de-b875-4b2f-8d8a-9c5dfbdea0e7",
      "songName": "Aenean fermentum.",
      "artistName": "Chic Scoates",
      "numberOfStreams": 1675,
      "releaseYear": 2010,
      "durationInSeconds": 168
    },
    {
      "id": "9f0b8d30-f999-40ca-8110-d37cb22e7a3a",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Che Yakubovich",
      "numberOfStreams": 3497,
      "releaseYear": 2007,
      "durationInSeconds": 186
    },
    {
      "id": "7c1dd8d2-a3e2-47ae-89fc-255b0ced855c",
      "songName": "In congue.",
      "artistName": "Darrin Gillingwater",
      "numberOfStreams": 4615,
      "releaseYear": 2001,
      "durationInSeconds": 116
    },
    {
      "id": "c6f81575-4982-4799-a7c8-7c6aeddd24ae",
      "songName": "In blandit ultrices enim.",
      "artistName": "Corny Aitken",
      "numberOfStreams": 1073,
      "releaseYear": 1999,
      "durationInSeconds": 466
    },
    {
      "id": "5fa345f5-1a67-428b-a651-ecfe88e3ec1a",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Myrle Arch",
      "numberOfStreams": 112,
      "releaseYear": 1995,
      "durationInSeconds": 187
    },
    {
      "id": "81dfd3bc-8b07-44b0-8f56-01325ae731d4",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Carmine Dregan",
      "numberOfStreams": 2905,
      "releaseYear": 1998,
      "durationInSeconds": 42
    },
    {
      "id": "65ce400e-fcae-4c78-9062-f863f66eceab",
      "songName": "Vivamus tortor.",
      "artistName": "Cornelle Eblein",
      "numberOfStreams": 2953,
      "releaseYear": 2007,
      "durationInSeconds": 242
    },
    {
      "id": "85c3d33c-2aa7-4088-a9bb-b65f2adc1417",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Olvan Irnys",
      "numberOfStreams": 2885,
      "releaseYear": 1989,
      "durationInSeconds": 406
    },
    {
      "id": "36d73822-3dc0-46c1-a1b9-0682ece885f6",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Valera Gallemore",
      "numberOfStreams": 2628,
      "releaseYear": 2002,
      "durationInSeconds": 151
    },
    {
      "id": "be0fd0a9-edfc-4dc1-8ee9-e4e228924be6",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Matt Sellars",
      "numberOfStreams": 1276,
      "releaseYear": 2011,
      "durationInSeconds": 271
    },
    {
      "id": "32d64316-ff58-45d1-867e-ce43bdb8fb0d",
      "songName": "Fusce posuere felis sed lacus.",
      "artistName": "Sukey Barmadier",
      "numberOfStreams": 2684,
      "releaseYear": 1983,
      "durationInSeconds": 22
    },
    {
      "id": "2036fd54-4b8e-4abf-89a5-2b3ffacfa5f9",
      "songName": "Proin at turpis a pede posuere nonummy.",
      "artistName": "Don Blight",
      "numberOfStreams": 1280,
      "releaseYear": 1998,
      "durationInSeconds": 17
    },
    {
      "id": "04996c05-de19-4666-b2bc-c709f39408cd",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Kathe Po",
      "numberOfStreams": 1956,
      "releaseYear": 2004,
      "durationInSeconds": 417
    },
    {
      "id": "677633e2-f5cc-4775-9791-dc554c4ad0db",
      "songName": "Fusce posuere felis sed lacus.",
      "artistName": "Sayres Dahmke",
      "numberOfStreams": 2392,
      "releaseYear": 2006,
      "durationInSeconds": 116
    },
    {
      "id": "243c7fda-2c12-4b75-8b7c-2e2cc947e1a7",
      "songName": "Etiam faucibus cursus urna.",
      "artistName": "Massimo McClenan",
      "numberOfStreams": 1987,
      "releaseYear": 2012,
      "durationInSeconds": 214
    },
    {
      "id": "19b633a1-9451-4e17-8965-6f30367a2b83",
      "songName": "Duis bibendum.",
      "artistName": "Avivah Ringer",
      "numberOfStreams": 1444,
      "releaseYear": 1990,
      "durationInSeconds": 59
    },
    {
      "id": "63a86648-3192-447d-a393-1621da9a05b3",
      "songName": "Morbi ut odio.",
      "artistName": "Mina Arenson",
      "numberOfStreams": 733,
      "releaseYear": 2005,
      "durationInSeconds": 444
    },
    {
      "id": "809a8534-876a-4927-a390-0416682491ab",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Gaspard Brosoli",
      "numberOfStreams": 4093,
      "releaseYear": 1996,
      "durationInSeconds": 477
    },
    {
      "id": "226b08f1-e446-443f-b1eb-4a32efe10e6b",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Ettie Bussen",
      "numberOfStreams": 358,
      "releaseYear": 2001,
      "durationInSeconds": 258
    },
    {
      "id": "ea6a2d5e-63ee-4007-8414-22afe9aa1bf4",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Haslett Ivantyev",
      "numberOfStreams": 897,
      "releaseYear": 2006,
      "durationInSeconds": 275
    },
    {
      "id": "5eaf3e68-59a5-47e3-9f98-5e5177da509b",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Agustin Stuttman",
      "numberOfStreams": 3026,
      "releaseYear": 1994,
      "durationInSeconds": 362
    },
    {
      "id": "1841c6fa-6f92-41b3-a05e-f95cc4bca3e4",
      "songName": "Mauris sit amet eros.",
      "artistName": "Konstanze Bendson",
      "numberOfStreams": 3560,
      "releaseYear": 1989,
      "durationInSeconds": 89
    },
    {
      "id": "6b18a3bd-8ffa-449c-a3f8-55c292eb90f6",
      "songName": "Donec vitae nisi.",
      "artistName": "Beatrice Steere",
      "numberOfStreams": 1513,
      "releaseYear": 2004,
      "durationInSeconds": 76
    },
    {
      "id": "7d47eeed-e90c-4da9-b836-e77aebd56df3",
      "songName": "Duis mattis egestas metus.",
      "artistName": "Millicent Wagon",
      "numberOfStreams": 1974,
      "releaseYear": 2010,
      "durationInSeconds": 491
    },
    {
      "id": "b1a804d6-de66-468c-ac5f-2e7e00bd122e",
      "songName": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "artistName": "Velma O'Hannen",
      "numberOfStreams": 2648,
      "releaseYear": 2004,
      "durationInSeconds": 136
    },
    {
      "id": "76eeec30-61be-4d40-bbdf-d098c8eae682",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Arvin Duigan",
      "numberOfStreams": 2197,
      "releaseYear": 1990,
      "durationInSeconds": 298
    },
    {
      "id": "76217d6b-f1b8-4eea-b9ec-f66dedf439a3",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Lola Kewzick",
      "numberOfStreams": 1350,
      "releaseYear": 2007,
      "durationInSeconds": 484
    },
    {
      "id": "d0052510-169a-44b8-a551-d5d0803717f4",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Shadow Luckey",
      "numberOfStreams": 2277,
      "releaseYear": 1998,
      "durationInSeconds": 65
    },
    {
      "id": "40c3809e-4029-447f-8bd6-0c30f19895f2",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Wally Henrichsen",
      "numberOfStreams": 214,
      "releaseYear": 2009,
      "durationInSeconds": 209
    },
    {
      "id": "25a7b9b9-6b81-40e9-b32b-ad3873507445",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Allistir Rossbrooke",
      "numberOfStreams": 3516,
      "releaseYear": 1998,
      "durationInSeconds": 447
    },
    {
      "id": "adee1ab6-6053-4bd4-b769-c3a779fd1195",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Hillery Shakspeare",
      "numberOfStreams": 833,
      "releaseYear": 1986,
      "durationInSeconds": 53
    },
    {
      "id": "61b61cfe-1f2f-4cd7-8336-b07b24fb9cee",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Culver Flory",
      "numberOfStreams": 1875,
      "releaseYear": 1991,
      "durationInSeconds": 455
    },
    {
      "id": "39437a9a-3f82-40e4-8cd4-b18f9d27a59e",
      "songName": "Maecenas tincidunt lacus at velit.",
      "artistName": "Alexandrina Panswick",
      "numberOfStreams": 4028,
      "releaseYear": 1954,
      "durationInSeconds": 104
    },
    {
      "id": "30149fc6-8e9f-4710-be0f-28219a4ae3fa",
      "songName": "Morbi a ipsum.",
      "artistName": "Kirbie Eldershaw",
      "numberOfStreams": 2054,
      "releaseYear": 2004,
      "durationInSeconds": 454
    },
    {
      "id": "47871fa8-470c-4cd9-b017-5fe253526967",
      "songName": "Sed ante.",
      "artistName": "Kattie Taig",
      "numberOfStreams": 4447,
      "releaseYear": 1992,
      "durationInSeconds": 113
    },
    {
      "id": "e33cefc2-f363-4f55-ab3e-3c1085f7729f",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Lucina Arrow",
      "numberOfStreams": 1906,
      "releaseYear": 2003,
      "durationInSeconds": 290
    },
    {
      "id": "5ab7a46b-eece-41c0-964b-89b9e2c8742d",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Armin Dana",
      "numberOfStreams": 2082,
      "releaseYear": 1996,
      "durationInSeconds": 443
    },
    {
      "id": "d57d99da-ecd3-42ff-a85e-80c5b0edee00",
      "songName": "Praesent blandit.",
      "artistName": "Fransisco Noyce",
      "numberOfStreams": 3446,
      "releaseYear": 1995,
      "durationInSeconds": 14
    },
    {
      "id": "37771512-bb4b-424d-b992-afbb0aed7792",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Carlye Feldhorn",
      "numberOfStreams": 2374,
      "releaseYear": 2010,
      "durationInSeconds": 345
    },
    {
      "id": "d97214e8-0e31-4c9b-a1b6-b3f9aafca725",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Derrik Beesley",
      "numberOfStreams": 80,
      "releaseYear": 1990,
      "durationInSeconds": 287
    },
    {
      "id": "c398bac5-d6e7-4119-be72-ff363139fc92",
      "songName": "Mauris ullamcorper purus sit amet nulla.",
      "artistName": "Rene Padillo",
      "numberOfStreams": 3488,
      "releaseYear": 2000,
      "durationInSeconds": 155
    },
    {
      "id": "22278729-fd2c-4c56-a630-11bda8e504da",
      "songName": "Integer a nibh.",
      "artistName": "Herminia Verne",
      "numberOfStreams": 193,
      "releaseYear": 1985,
      "durationInSeconds": 291
    },
    {
      "id": "1c9c3fd3-f499-4719-a568-9959ea7c8c3a",
      "songName": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      "artistName": "June Gisborne",
      "numberOfStreams": 3941,
      "releaseYear": 2003,
      "durationInSeconds": 54
    },
    {
      "id": "18c63e3b-3d12-46dd-beaa-b5eab24ba332",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Joane Rysom",
      "numberOfStreams": 359,
      "releaseYear": 1999,
      "durationInSeconds": 474
    },
    {
      "id": "fbd260c1-8c35-4225-83fa-cb671b8bedd7",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Saba Angrick",
      "numberOfStreams": 535,
      "releaseYear": 1998,
      "durationInSeconds": 11
    },
    {
      "id": "731094a4-9ce1-4b67-8b26-6b410ab3f326",
      "songName": "Quisque ut erat.",
      "artistName": "Marmaduke Murden",
      "numberOfStreams": 3701,
      "releaseYear": 2001,
      "durationInSeconds": 155
    },
    {
      "id": "b208ffea-b40a-4ffd-9b94-dc5816d26c46",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Goldia Fireman",
      "numberOfStreams": 1534,
      "releaseYear": 2000,
      "durationInSeconds": 179
    },
    {
      "id": "cfaeb5d3-4daa-48b6-a74b-d276c57ec2e2",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Weylin Delhay",
      "numberOfStreams": 3278,
      "releaseYear": 2005,
      "durationInSeconds": 49
    },
    {
      "id": "7dd1d9da-0e82-4dee-9786-078436c90648",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Ariana Frigot",
      "numberOfStreams": 4452,
      "releaseYear": 2004,
      "durationInSeconds": 68
    },
    {
      "id": "e0b5146e-d431-4deb-91a5-2427d5138cea",
      "songName": "Donec vitae nisi.",
      "artistName": "Min Parlot",
      "numberOfStreams": 342,
      "releaseYear": 1999,
      "durationInSeconds": 246
    },
    {
      "id": "c7c09c01-124a-4824-9968-6b29d41b1fdc",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Eba Hatherley",
      "numberOfStreams": 4685,
      "releaseYear": 2007,
      "durationInSeconds": 499
    },
    {
      "id": "db19566e-e035-4e7c-ba0a-7a432d8d6795",
      "songName": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      "artistName": "Xavier Bartolomivis",
      "numberOfStreams": 1817,
      "releaseYear": 2010,
      "durationInSeconds": 96
    },
    {
      "id": "b0f9158d-7aa2-40f9-84ca-df802f5c5f50",
      "songName": "Maecenas rhoncus aliquam lacus.",
      "artistName": "Clarissa Scotland",
      "numberOfStreams": 2996,
      "releaseYear": 1970,
      "durationInSeconds": 163
    },
    {
      "id": "c93b6df5-4163-4664-ac61-28fd2f46dc28",
      "songName": "In congue.",
      "artistName": "Natala Klaiser",
      "numberOfStreams": 4113,
      "releaseYear": 1987,
      "durationInSeconds": 132
    },
    {
      "id": "5f018ca8-ac77-4746-be0e-793cecbf1e95",
      "songName": "Duis ac nibh.",
      "artistName": "Caleb Riditch",
      "numberOfStreams": 1019,
      "releaseYear": 2000,
      "durationInSeconds": 479
    },
    {
      "id": "6c358853-ce45-4f56-aa9d-4b9f74c8ce26",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      "artistName": "Jessey Spurier",
      "numberOfStreams": 1354,
      "releaseYear": 2008,
      "durationInSeconds": 382
    },
    {
      "id": "579853a7-3ac7-4bb8-8cc1-6d6e48b906e7",
      "songName": "Cras non velit nec nisi vulputate nonummy.",
      "artistName": "Joelle Anneslie",
      "numberOfStreams": 586,
      "releaseYear": 1993,
      "durationInSeconds": 400
    },
    {
      "id": "cc705c7e-0265-47b6-ad36-a725d1309fe4",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Zsa zsa Kadar",
      "numberOfStreams": 4373,
      "releaseYear": 1997,
      "durationInSeconds": 382
    },
    {
      "id": "c5b6dc73-f65f-4573-bb1d-0cc081055d78",
      "songName": "Nunc purus.",
      "artistName": "Bucky Milmore",
      "numberOfStreams": 2488,
      "releaseYear": 1994,
      "durationInSeconds": 75
    },
    {
      "id": "5e9af4e9-d37b-47eb-b6f4-3122b161549b",
      "songName": "Nulla nisl.",
      "artistName": "Marika Killingback",
      "numberOfStreams": 2833,
      "releaseYear": 1996,
      "durationInSeconds": 382
    },
    {
      "id": "576d7a9f-19c2-40ba-b6a7-011d96857a2d",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Carree Scough",
      "numberOfStreams": 3361,
      "releaseYear": 1992,
      "durationInSeconds": 10
    },
    {
      "id": "ee0068f9-723c-4f79-8d18-f28668d0d327",
      "songName": "In blandit ultrices enim.",
      "artistName": "Mychal Veel",
      "numberOfStreams": 3465,
      "releaseYear": 2001,
      "durationInSeconds": 208
    },
    {
      "id": "7fb8ba26-fbed-456f-bd51-3a25c76cc3ed",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Kerri Clowney",
      "numberOfStreams": 1601,
      "releaseYear": 1998,
      "durationInSeconds": 243
    },
    {
      "id": "114f05f4-a8dd-4f5a-ad42-eb7425e6817c",
      "songName": "Ut tellus.",
      "artistName": "Ewan Megson",
      "numberOfStreams": 21,
      "releaseYear": 2009,
      "durationInSeconds": 122
    },
    {
      "id": "87a48f9a-4f9e-437d-a4ad-5c815da7412d",
      "songName": "Sed sagittis.",
      "artistName": "Elizabet Popworth",
      "numberOfStreams": 524,
      "releaseYear": 2000,
      "durationInSeconds": 169
    },
    {
      "id": "efd8ca49-6192-4d10-ac76-7d3c2cc24d5a",
      "songName": "Nulla tellus.",
      "artistName": "Mycah Scafe",
      "numberOfStreams": 2630,
      "releaseYear": 2011,
      "durationInSeconds": 248
    },
    {
      "id": "4e9770a6-ceba-493b-b671-79edc480b59b",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Kat Hunnam",
      "numberOfStreams": 3280,
      "releaseYear": 2010,
      "durationInSeconds": 107
    },
    {
      "id": "472fc7f8-79c3-499b-8c2c-d47454abfe64",
      "songName": "Nulla justo.",
      "artistName": "Reinaldo Coverlyn",
      "numberOfStreams": 1063,
      "releaseYear": 1994,
      "durationInSeconds": 350
    },
    {
      "id": "0a466b7f-174b-4bbe-b0d0-f9d0adf4cb65",
      "songName": "Nulla nisl.",
      "artistName": "Cad Brant",
      "numberOfStreams": 4049,
      "releaseYear": 1996,
      "durationInSeconds": 388
    },
    {
      "id": "4e8bba69-81c3-44a9-95f3-cd82a610b3d6",
      "songName": "Sed accumsan felis.",
      "artistName": "Fredrika Andrusyak",
      "numberOfStreams": 4596,
      "releaseYear": 2007,
      "durationInSeconds": 245
    },
    {
      "id": "40402dc0-36b7-4d1c-b56b-c08f93c0e20e",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Kristofer Heaton",
      "numberOfStreams": 133,
      "releaseYear": 2007,
      "durationInSeconds": 345
    },
    {
      "id": "58f5d220-1b41-4409-826c-236007cab686",
      "songName": "Curabitur convallis.",
      "artistName": "Yanaton Meadus",
      "numberOfStreams": 3009,
      "releaseYear": 2008,
      "durationInSeconds": 149
    },
    {
      "id": "acc6aa39-1791-4040-8c2c-1ad0d2f3ad55",
      "songName": "Etiam justo.",
      "artistName": "Kareem Slaght",
      "numberOfStreams": 928,
      "releaseYear": 1999,
      "durationInSeconds": 21
    },
    {
      "id": "b5af416a-e7c7-486a-9bc2-aea99690c338",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Sancho Delacoste",
      "numberOfStreams": 4775,
      "releaseYear": 2005,
      "durationInSeconds": 430
    },
    {
      "id": "a36038bb-59c0-423a-aef4-092ee0a75d4b",
      "songName": "Aenean fermentum.",
      "artistName": "Junina Maffeo",
      "numberOfStreams": 3562,
      "releaseYear": 1992,
      "durationInSeconds": 57
    },
    {
      "id": "316132b9-4e9c-4778-bd4e-ecfab01bc771",
      "songName": "Proin eu mi.",
      "artistName": "Enrika Tersay",
      "numberOfStreams": 4306,
      "releaseYear": 1987,
      "durationInSeconds": 330
    },
    {
      "id": "bb956fee-3321-453f-ae81-ae5badebc134",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Madalena Beddows",
      "numberOfStreams": 4566,
      "releaseYear": 1998,
      "durationInSeconds": 452
    },
    {
      "id": "e1a3f734-c338-4e7e-b414-726a8c0f2238",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Tamara Thewys",
      "numberOfStreams": 1872,
      "releaseYear": 1990,
      "durationInSeconds": 159
    },
    {
      "id": "3dc3fc3a-0107-4785-9d85-651c7c9daf56",
      "songName": "Nunc purus.",
      "artistName": "Alonzo Pring",
      "numberOfStreams": 4766,
      "releaseYear": 2012,
      "durationInSeconds": 48
    },
    {
      "id": "863d00f0-3b75-4292-9e97-a3dd32f69df9",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Daryl Jerzyk",
      "numberOfStreams": 3795,
      "releaseYear": 1999,
      "durationInSeconds": 341
    },
    {
      "id": "56d9147a-76b3-4dbe-b753-38a886266b0c",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Ezechiel Albon",
      "numberOfStreams": 3548,
      "releaseYear": 2012,
      "durationInSeconds": 3
    },
    {
      "id": "b78ca4aa-b4d4-4550-8d4e-47f33a3d61b0",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Cissiee Erni",
      "numberOfStreams": 4429,
      "releaseYear": 1997,
      "durationInSeconds": 252
    },
    {
      "id": "22cca13c-cfc4-4900-af73-3dac6c713558",
      "songName": "Duis ac nibh.",
      "artistName": "Yalonda Cratchley",
      "numberOfStreams": 4731,
      "releaseYear": 2002,
      "durationInSeconds": 198
    },
    {
      "id": "0e1f8f34-bd45-4c8e-af7d-15acc098c7dd",
      "songName": "Etiam faucibus cursus urna.",
      "artistName": "Nolly Thynn",
      "numberOfStreams": 3143,
      "releaseYear": 2008,
      "durationInSeconds": 163
    },
    {
      "id": "6c8995b6-f330-44b2-bc93-91e45a56af4a",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Lorin Antrim",
      "numberOfStreams": 2330,
      "releaseYear": 1993,
      "durationInSeconds": 50
    },
    {
      "id": "17069b6d-1c0c-40cc-8614-c9eae8425261",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Karoly Pascoe",
      "numberOfStreams": 3268,
      "releaseYear": 1997,
      "durationInSeconds": 355
    },
    {
      "id": "19870d88-06b7-4c60-a022-9585fdad7b95",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Lennie Pamment",
      "numberOfStreams": 2222,
      "releaseYear": 2005,
      "durationInSeconds": 352
    },
    {
      "id": "f41da864-c455-4493-9ead-c1fb429b7007",
      "songName": "Curabitur gravida nisi at nibh.",
      "artistName": "Sly Rowlings",
      "numberOfStreams": 2670,
      "releaseYear": 2007,
      "durationInSeconds": 477
    },
    {
      "id": "8fa05a58-2041-46b1-86c8-c496ca655460",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Kristan Carillo",
      "numberOfStreams": 2311,
      "releaseYear": 2001,
      "durationInSeconds": 426
    },
    {
      "id": "2f252886-b4b2-4a14-8629-6bd68ac1250a",
      "songName": "Nam nulla.",
      "artistName": "Estell Gritten",
      "numberOfStreams": 3637,
      "releaseYear": 2008,
      "durationInSeconds": 306
    },
    {
      "id": "04e3021a-7fc2-401e-b1db-a681777b9301",
      "songName": "Aenean sit amet justo.",
      "artistName": "Kimberley Beininck",
      "numberOfStreams": 3302,
      "releaseYear": 1994,
      "durationInSeconds": 239
    },
    {
      "id": "428aed78-2356-4e83-84a4-1ca536de0503",
      "songName": "Nullam varius.",
      "artistName": "Mikol Lawful",
      "numberOfStreams": 1284,
      "releaseYear": 1995,
      "durationInSeconds": 312
    },
    {
      "id": "b5daa91a-221b-45f9-9cdd-32cf864c544e",
      "songName": "Praesent blandit.",
      "artistName": "Yard Takkos",
      "numberOfStreams": 2971,
      "releaseYear": 2011,
      "durationInSeconds": 37
    },
    {
      "id": "44451cac-6a1f-4d1b-856c-f63d3881d526",
      "songName": "Praesent lectus.",
      "artistName": "Allistir Renzini",
      "numberOfStreams": 1417,
      "releaseYear": 2012,
      "durationInSeconds": 255
    },
    {
      "id": "aab9a738-901c-4352-a1c4-6916123fdc4f",
      "songName": "Etiam justo.",
      "artistName": "Cullan Daniely",
      "numberOfStreams": 4142,
      "releaseYear": 2012,
      "durationInSeconds": 250
    },
    {
      "id": "41fe0822-1319-4148-9bfa-52854cedaa9c",
      "songName": "Pellentesque viverra pede ac diam.",
      "artistName": "Walliw Tavener",
      "numberOfStreams": 372,
      "releaseYear": 2008,
      "durationInSeconds": 233
    },
    {
      "id": "3b977a9c-8125-4d5d-8fb1-a539c3c1abb4",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Shela McGilbon",
      "numberOfStreams": 4959,
      "releaseYear": 1994,
      "durationInSeconds": 48
    },
    {
      "id": "6f60d25f-c1d9-4899-85fc-9f762e92a812",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Nathalie Imlacke",
      "numberOfStreams": 994,
      "releaseYear": 2006,
      "durationInSeconds": 363
    },
    {
      "id": "2cd49854-0554-424b-8ae9-90b92e648e9f",
      "songName": "Duis ac nibh.",
      "artistName": "Giana Duxbarry",
      "numberOfStreams": 358,
      "releaseYear": 1985,
      "durationInSeconds": 474
    },
    {
      "id": "c0a6c597-a1f7-4426-beec-86934f968781",
      "songName": "Integer ac neque.",
      "artistName": "Chan Leming",
      "numberOfStreams": 3178,
      "releaseYear": 1997,
      "durationInSeconds": 373
    },
    {
      "id": "decf8f99-8c1a-40d6-9d3b-6b67f028094b",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Sherry Hutchence",
      "numberOfStreams": 4382,
      "releaseYear": 2005,
      "durationInSeconds": 433
    },
    {
      "id": "a155b82a-2013-4a7e-9873-b38c9a29a08e",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Randy Garbett",
      "numberOfStreams": 1788,
      "releaseYear": 2000,
      "durationInSeconds": 313
    },
    {
      "id": "9b03dba4-0092-4f47-a20f-5d4003b5dcdb",
      "songName": "Nam nulla.",
      "artistName": "Mathilda Slott",
      "numberOfStreams": 3450,
      "releaseYear": 2006,
      "durationInSeconds": 470
    },
    {
      "id": "71636b80-904b-4057-8777-a99bff20a14f",
      "songName": "Aliquam non mauris.",
      "artistName": "Kevan Garlic",
      "numberOfStreams": 841,
      "releaseYear": 1995,
      "durationInSeconds": 273
    },
    {
      "id": "4260fc31-b1f2-470b-bfc0-99dc078fb04c",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Maye Mallalieu",
      "numberOfStreams": 3629,
      "releaseYear": 2004,
      "durationInSeconds": 113
    },
    {
      "id": "a9872197-2efa-4203-9bf5-128e248ad1ea",
      "songName": "Praesent blandit.",
      "artistName": "Tammara Shine",
      "numberOfStreams": 490,
      "releaseYear": 1998,
      "durationInSeconds": 16
    },
    {
      "id": "cc221804-049e-48f7-9f3a-e029a889d28f",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Carrissa Carnock",
      "numberOfStreams": 1940,
      "releaseYear": 1992,
      "durationInSeconds": 92
    },
    {
      "id": "08d5cb94-b49a-4205-a13e-95389dd7278a",
      "songName": "In eleifend quam a odio.",
      "artistName": "Lambert Jedrychowski",
      "numberOfStreams": 764,
      "releaseYear": 2001,
      "durationInSeconds": 157
    },
    {
      "id": "8ed3391f-e3a4-4af1-93a8-cb01b52cfe1a",
      "songName": "Sed sagittis.",
      "artistName": "Hanan Behnen",
      "numberOfStreams": 1255,
      "releaseYear": 1989,
      "durationInSeconds": 85
    },
    {
      "id": "0d6dce59-5d69-4c9a-b943-6cb9ac58625b",
      "songName": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      "artistName": "Wallis Barefoot",
      "numberOfStreams": 3977,
      "releaseYear": 2003,
      "durationInSeconds": 245
    },
    {
      "id": "8daf2867-71f1-4d77-8d6e-bc1e53bf93ee",
      "songName": "Integer ac neque.",
      "artistName": "Elladine Else",
      "numberOfStreams": 4580,
      "releaseYear": 1987,
      "durationInSeconds": 327
    },
    {
      "id": "ae423912-2a6d-411e-ba67-104f68e73176",
      "songName": "Integer ac leo.",
      "artistName": "Shanie O' Flaherty",
      "numberOfStreams": 4470,
      "releaseYear": 2012,
      "durationInSeconds": 19
    },
    {
      "id": "d4b8d4e4-fcff-457c-97a3-9fdb4913c666",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Hermina Zuan",
      "numberOfStreams": 1070,
      "releaseYear": 1998,
      "durationInSeconds": 498
    },
    {
      "id": "c030a0ba-497a-46ab-a2bc-df9be652213e",
      "songName": "Integer ac neque.",
      "artistName": "Conan Guys",
      "numberOfStreams": 4660,
      "releaseYear": 2005,
      "durationInSeconds": 73
    },
    {
      "id": "b17bd11c-99f4-4d5a-8378-0f5347b85465",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Channa Stood",
      "numberOfStreams": 1664,
      "releaseYear": 2007,
      "durationInSeconds": 135
    },
    {
      "id": "4a045ec7-710e-4ae6-abfb-30e96e0fdec7",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Lotti Shearman",
      "numberOfStreams": 1304,
      "releaseYear": 2004,
      "durationInSeconds": 373
    },
    {
      "id": "6c37148a-24a1-4565-a19a-8bed605a6f82",
      "songName": "Quisque id justo sit amet sapien dignissim vestibulum.",
      "artistName": "Amabelle Baggot",
      "numberOfStreams": 4624,
      "releaseYear": 2010,
      "durationInSeconds": 6
    },
    {
      "id": "e3106599-29b5-42e2-899c-a48050b3cb61",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Diandra Mularkey",
      "numberOfStreams": 4934,
      "releaseYear": 1995,
      "durationInSeconds": 188
    },
    {
      "id": "11f46d38-fcfe-4045-913a-33ea981adb11",
      "songName": "Etiam vel augue.",
      "artistName": "Inga Desmond",
      "numberOfStreams": 4493,
      "releaseYear": 1997,
      "durationInSeconds": 244
    },
    {
      "id": "269084bd-7010-49c2-b88c-49e847097ced",
      "songName": "Nam dui.",
      "artistName": "Inez Daltry",
      "numberOfStreams": 4618,
      "releaseYear": 1958,
      "durationInSeconds": 50
    },
    {
      "id": "f61b98b7-3594-4bf8-8027-70a6ebb40574",
      "songName": "Morbi a ipsum.",
      "artistName": "Twila Burn",
      "numberOfStreams": 3117,
      "releaseYear": 2007,
      "durationInSeconds": 297
    },
    {
      "id": "604a83b8-39fa-4d61-8fa1-e24552696775",
      "songName": "Ut tellus.",
      "artistName": "Lira Duggary",
      "numberOfStreams": 3283,
      "releaseYear": 1986,
      "durationInSeconds": 208
    },
    {
      "id": "7c4dee08-3a83-4716-a986-e77ec5d1aa1b",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Zitella Middle",
      "numberOfStreams": 3907,
      "releaseYear": 1992,
      "durationInSeconds": 267
    },
    {
      "id": "7648e2e4-da97-45e6-a455-dd6bf882e193",
      "songName": "Mauris sit amet eros.",
      "artistName": "Chalmers Lindenstrauss",
      "numberOfStreams": 4350,
      "releaseYear": 2012,
      "durationInSeconds": 371
    },
    {
      "id": "f50fb3fd-bdea-453c-acaa-5a90bd0ed1e7",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Dalis Whapham",
      "numberOfStreams": 3726,
      "releaseYear": 1994,
      "durationInSeconds": 490
    },
    {
      "id": "c4b87700-4e80-4fae-8eb2-412d2eecb7f2",
      "songName": "Maecenas tincidunt lacus at velit.",
      "artistName": "Laurianne McMeyler",
      "numberOfStreams": 2164,
      "releaseYear": 2012,
      "durationInSeconds": 416
    },
    {
      "id": "e92925a8-1bb3-4b7f-8e88-2655fe7ac6e7",
      "songName": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "artistName": "Rudie Alejandre",
      "numberOfStreams": 2901,
      "releaseYear": 2007,
      "durationInSeconds": 450
    },
    {
      "id": "337a0f8c-e76b-48eb-bb8d-72712e3d88c4",
      "songName": "In eleifend quam a odio.",
      "artistName": "Devi Mattschas",
      "numberOfStreams": 1589,
      "releaseYear": 2006,
      "durationInSeconds": 487
    },
    {
      "id": "61583ea7-82d6-484f-953a-80ece4b8ac72",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Shep Orange",
      "numberOfStreams": 4343,
      "releaseYear": 1996,
      "durationInSeconds": 376
    },
    {
      "id": "8b7309f4-b002-4602-88ae-88a40c6e63b2",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Marty Gallacher",
      "numberOfStreams": 3645,
      "releaseYear": 2009,
      "durationInSeconds": 7
    },
    {
      "id": "c189182a-f9b2-485c-84d5-dc005304728c",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Tadio Burchell",
      "numberOfStreams": 1799,
      "releaseYear": 2012,
      "durationInSeconds": 47
    },
    {
      "id": "533d7e02-2c25-44d6-bbd4-8b8e1865307b",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Avie Salisbury",
      "numberOfStreams": 4634,
      "releaseYear": 1967,
      "durationInSeconds": 313
    },
    {
      "id": "04dd10b2-f5a6-4f67-bfd5-93f3c67b64a0",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Sherwin Chateau",
      "numberOfStreams": 571,
      "releaseYear": 2002,
      "durationInSeconds": 306
    },
    {
      "id": "0aef5501-84a8-48d3-aac3-0b2007922250",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Ileane Cankett",
      "numberOfStreams": 1981,
      "releaseYear": 2011,
      "durationInSeconds": 248
    },
    {
      "id": "262e81b2-4b41-4034-add8-27344fc4948e",
      "songName": "Donec ut mauris eget massa tempor convallis.",
      "artistName": "Rozalin Leggs",
      "numberOfStreams": 3109,
      "releaseYear": 2010,
      "durationInSeconds": 47
    },
    {
      "id": "ac5427fd-f68e-4de9-b17f-794b83ae2e1a",
      "songName": "Duis aliquam convallis nunc.",
      "artistName": "Sibley Cursey",
      "numberOfStreams": 2133,
      "releaseYear": 1993,
      "durationInSeconds": 189
    },
    {
      "id": "7f11857f-ca12-4a3e-9964-d0682fddaec8",
      "songName": "Morbi non lectus.",
      "artistName": "Hubey Forsyth",
      "numberOfStreams": 1546,
      "releaseYear": 2010,
      "durationInSeconds": 223
    },
    {
      "id": "953feb4c-2266-444c-ac6a-4a555e40f473",
      "songName": "Nullam varius.",
      "artistName": "Jean Heimes",
      "numberOfStreams": 576,
      "releaseYear": 2006,
      "durationInSeconds": 84
    },
    {
      "id": "3e6d494f-8097-4485-a472-1d69f2293104",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Muire Pead",
      "numberOfStreams": 4204,
      "releaseYear": 1983,
      "durationInSeconds": 314
    },
    {
      "id": "ac441d4e-4262-4dba-a430-401a6439f962",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Maddalena Harden",
      "numberOfStreams": 1632,
      "releaseYear": 1995,
      "durationInSeconds": 244
    },
    {
      "id": "d8c49d1b-e99e-4101-9708-f14815ac07b8",
      "songName": "Aenean fermentum.",
      "artistName": "Dunn Leydon",
      "numberOfStreams": 1520,
      "releaseYear": 1995,
      "durationInSeconds": 277
    },
    {
      "id": "6e956895-dd3e-4991-980f-75e1fe287ab8",
      "songName": "Nunc nisl.",
      "artistName": "Eulalie Ligoe",
      "numberOfStreams": 2925,
      "releaseYear": 2004,
      "durationInSeconds": 231
    },
    {
      "id": "4ea794d3-0a13-4a93-9609-21f17cc674de",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Philipa Skingley",
      "numberOfStreams": 4889,
      "releaseYear": 1993,
      "durationInSeconds": 266
    },
    {
      "id": "0008a7d0-1ab8-4978-969a-10853199f4a5",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Lisbeth Broune",
      "numberOfStreams": 2362,
      "releaseYear": 2011,
      "durationInSeconds": 302
    },
    {
      "id": "12ba1c96-d891-481f-b2ce-a198b944ecf6",
      "songName": "Morbi ut odio.",
      "artistName": "Maible Stookes",
      "numberOfStreams": 4697,
      "releaseYear": 2011,
      "durationInSeconds": 355
    },
    {
      "id": "f4b34028-e99d-4baa-afd2-479336b83c54",
      "songName": "Donec ut dolor.",
      "artistName": "Barbee Dansken",
      "numberOfStreams": 436,
      "releaseYear": 2002,
      "durationInSeconds": 136
    },
    {
      "id": "af4452ed-9313-4a40-a39e-d7bc7376509e",
      "songName": "Fusce posuere felis sed lacus.",
      "artistName": "Constantino Coskerry",
      "numberOfStreams": 3438,
      "releaseYear": 1999,
      "durationInSeconds": 208
    },
    {
      "id": "9cb8792e-6ce9-4186-9ac8-8fa48fdf917a",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Ester Godball",
      "numberOfStreams": 3573,
      "releaseYear": 2008,
      "durationInSeconds": 335
    },
    {
      "id": "b01bd90c-b6c7-49e2-8ecb-776886e057ab",
      "songName": "Nulla justo.",
      "artistName": "Lucio Powderham",
      "numberOfStreams": 3892,
      "releaseYear": 1987,
      "durationInSeconds": 279
    },
    {
      "id": "02e9c6c3-af4c-4846-9a84-ef02bfda79fd",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Stephanie Janu",
      "numberOfStreams": 3699,
      "releaseYear": 2004,
      "durationInSeconds": 384
    },
    {
      "id": "92d0aef3-ece8-4c31-a3f3-cb999e8c9435",
      "songName": "Suspendisse potenti.",
      "artistName": "Marjy Please",
      "numberOfStreams": 4040,
      "releaseYear": 2008,
      "durationInSeconds": 374
    },
    {
      "id": "b5ebf7b5-ce1f-40e0-8423-a5c4e2a1938d",
      "songName": "Morbi ut odio.",
      "artistName": "Fowler Everest",
      "numberOfStreams": 1986,
      "releaseYear": 2010,
      "durationInSeconds": 247
    },
    {
      "id": "de14fb14-00ac-47fa-81a6-59391d89372c",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Marlow De Gregorio",
      "numberOfStreams": 1724,
      "releaseYear": 2009,
      "durationInSeconds": 457
    },
    {
      "id": "7ac635c9-c141-46c8-a689-8b962b88daf2",
      "songName": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "artistName": "Pen Fould",
      "numberOfStreams": 2775,
      "releaseYear": 2011,
      "durationInSeconds": 48
    },
    {
      "id": "c103de68-36f4-4a76-8631-676d0e19357b",
      "songName": "Duis aliquam convallis nunc.",
      "artistName": "Zulema Bereford",
      "numberOfStreams": 711,
      "releaseYear": 1996,
      "durationInSeconds": 129
    },
    {
      "id": "6e47219c-5690-4c66-812b-a33b026487f7",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Mano Pashan",
      "numberOfStreams": 4531,
      "releaseYear": 2009,
      "durationInSeconds": 50
    },
    {
      "id": "900300a5-772e-483c-bd27-d8f887c753a1",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Seward McKean",
      "numberOfStreams": 6,
      "releaseYear": 2009,
      "durationInSeconds": 284
    },
    {
      "id": "ec3b9b27-c854-4a97-aa99-e1d26f17597f",
      "songName": "Duis bibendum.",
      "artistName": "Mayne Kliment",
      "numberOfStreams": 823,
      "releaseYear": 2008,
      "durationInSeconds": 50
    },
    {
      "id": "a99f39a0-d3b7-422c-acf6-26bd3fba0ba5",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Queenie Treuge",
      "numberOfStreams": 237,
      "releaseYear": 1988,
      "durationInSeconds": 198
    },
    {
      "id": "b354fab5-932a-4a33-a36f-ca4ea43ad63f",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Leonelle Chiese",
      "numberOfStreams": 1784,
      "releaseYear": 2006,
      "durationInSeconds": 74
    },
    {
      "id": "e1d4c661-f16d-45c8-a51c-44fc6e2203ba",
      "songName": "Proin risus.",
      "artistName": "Melodee Hatchell",
      "numberOfStreams": 401,
      "releaseYear": 1995,
      "durationInSeconds": 351
    },
    {
      "id": "72f751a7-d21b-449b-bfef-66abd5742c0a",
      "songName": "Vivamus vestibulum sagittis sapien.",
      "artistName": "Eryn Sirman",
      "numberOfStreams": 468,
      "releaseYear": 2010,
      "durationInSeconds": 99
    },
    {
      "id": "8e12e751-0189-4ae3-939e-658e17b10ef7",
      "songName": "Donec semper sapien a libero.",
      "artistName": "Hesther Kubacek",
      "numberOfStreams": 2721,
      "releaseYear": 2010,
      "durationInSeconds": 450
    },
    {
      "id": "72d124df-3e75-4d55-9ecd-5a377478c235",
      "songName": "Nam dui.",
      "artistName": "Benedetto Freschini",
      "numberOfStreams": 4634,
      "releaseYear": 2006,
      "durationInSeconds": 233
    },
    {
      "id": "f0b3c88b-9d7b-4606-840f-80cbe6bbb2b8",
      "songName": "Nulla ac enim.",
      "artistName": "Demott Eggleson",
      "numberOfStreams": 4859,
      "releaseYear": 2007,
      "durationInSeconds": 379
    },
    {
      "id": "1712fab1-4135-45a0-84a7-0a8d60ddf762",
      "songName": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "artistName": "Leoine Paprotny",
      "numberOfStreams": 3967,
      "releaseYear": 2002,
      "durationInSeconds": 479
    },
    {
      "id": "7e035984-17a2-478e-a183-a9980019e583",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Clarissa I'anson",
      "numberOfStreams": 2201,
      "releaseYear": 2001,
      "durationInSeconds": 157
    },
    {
      "id": "1be89c0a-a137-4acb-bea4-2bcbf1469afe",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Ileana Spadaro",
      "numberOfStreams": 4689,
      "releaseYear": 1991,
      "durationInSeconds": 203
    },
    {
      "id": "0ddc5f0b-a750-49f1-8774-cbded34a1262",
      "songName": "Nulla ac enim.",
      "artistName": "Kyla Climson",
      "numberOfStreams": 3255,
      "releaseYear": 2012,
      "durationInSeconds": 455
    },
    {
      "id": "438e55f5-7056-4e9c-89c6-1607998bb85d",
      "songName": "Nam dui.",
      "artistName": "Arlan Olivello",
      "numberOfStreams": 3230,
      "releaseYear": 2012,
      "durationInSeconds": 141
    },
    {
      "id": "9339cda8-969e-455c-a4b4-55b4ee8dfd27",
      "songName": "Vivamus vel nulla eget eros elementum pellentesque.",
      "artistName": "Dynah Sherborn",
      "numberOfStreams": 4841,
      "releaseYear": 2006,
      "durationInSeconds": 126
    },
    {
      "id": "2dbbd116-d03d-4026-a68f-952590dfc3fc",
      "songName": "Nulla justo.",
      "artistName": "Eli Barczynski",
      "numberOfStreams": 2858,
      "releaseYear": 1994,
      "durationInSeconds": 352
    },
    {
      "id": "5edd1b2b-e92b-4b69-8c70-c0e46b70f4ba",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Austin Alstead",
      "numberOfStreams": 4582,
      "releaseYear": 2008,
      "durationInSeconds": 54
    },
    {
      "id": "bca8a2a6-acf4-487b-8a8e-38880c73f86c",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Christiane Harbison",
      "numberOfStreams": 3011,
      "releaseYear": 2001,
      "durationInSeconds": 218
    },
    {
      "id": "0a86aa85-c376-4fd9-a9c4-76798ff3e072",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Malorie Methringham",
      "numberOfStreams": 4891,
      "releaseYear": 1987,
      "durationInSeconds": 96
    },
    {
      "id": "89ee098a-2747-485b-83a0-a33afadd5e92",
      "songName": "Aliquam non mauris.",
      "artistName": "Philomena Jentle",
      "numberOfStreams": 4840,
      "releaseYear": 1974,
      "durationInSeconds": 66
    },
    {
      "id": "cd5bee3f-778e-4bbf-81b1-572363073b8b",
      "songName": "Donec ut mauris eget massa tempor convallis.",
      "artistName": "Kitty Street",
      "numberOfStreams": 830,
      "releaseYear": 2003,
      "durationInSeconds": 388
    },
    {
      "id": "19bbdd1c-2c7c-47de-b871-2c18f08ec95d",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Miguel Meiningen",
      "numberOfStreams": 298,
      "releaseYear": 2004,
      "durationInSeconds": 226
    },
    {
      "id": "7940124b-1903-48cf-be7c-11be12f7f197",
      "songName": "Aenean auctor gravida sem.",
      "artistName": "Monte Selkirk",
      "numberOfStreams": 950,
      "releaseYear": 2003,
      "durationInSeconds": 217
    },
    {
      "id": "2815b97a-cd1d-4757-850f-f370aa76341d",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Thadeus Harbour",
      "numberOfStreams": 1591,
      "releaseYear": 1996,
      "durationInSeconds": 338
    },
    {
      "id": "11c1f0b8-79f0-4f3a-aed7-b576babcea42",
      "songName": "Sed sagittis.",
      "artistName": "Nani Onslow",
      "numberOfStreams": 2733,
      "releaseYear": 2012,
      "durationInSeconds": 56
    },
    {
      "id": "8d291cdd-bcfc-4b08-973f-7deec70e9df1",
      "songName": "Aliquam non mauris.",
      "artistName": "Sophi Erskin",
      "numberOfStreams": 296,
      "releaseYear": 1997,
      "durationInSeconds": 489
    },
    {
      "id": "f288a7ae-e9bd-4a28-8dbf-c1c76e10bb9c",
      "songName": "Nam dui.",
      "artistName": "Anastassia Bayford",
      "numberOfStreams": 2712,
      "releaseYear": 2010,
      "durationInSeconds": 64
    },
    {
      "id": "67ad37ba-f334-4fdb-a816-61fc96147cb3",
      "songName": "Proin eu mi.",
      "artistName": "Caresa Foynes",
      "numberOfStreams": 1709,
      "releaseYear": 1985,
      "durationInSeconds": 336
    },
    {
      "id": "d95db8ef-f12a-4224-9985-79992ce340cb",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Andie Aldersea",
      "numberOfStreams": 4079,
      "releaseYear": 2011,
      "durationInSeconds": 253
    },
    {
      "id": "6bbd740e-7799-422d-80cb-f9b1b5d7b97e",
      "songName": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "artistName": "Karla Joy",
      "numberOfStreams": 1764,
      "releaseYear": 2000,
      "durationInSeconds": 394
    },
    {
      "id": "dfc06038-c299-4fe4-b503-8fee83cc1466",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Randa Armin",
      "numberOfStreams": 3986,
      "releaseYear": 2010,
      "durationInSeconds": 404
    },
    {
      "id": "f98ad88c-8364-4526-b4c8-4e468fe9c12d",
      "songName": "Suspendisse potenti.",
      "artistName": "Golda Hallybone",
      "numberOfStreams": 3744,
      "releaseYear": 1992,
      "durationInSeconds": 53
    },
    {
      "id": "4d0b9cdd-85be-4c5e-9466-4876e6261439",
      "songName": "Phasellus in felis.",
      "artistName": "Dionis Kell",
      "numberOfStreams": 3119,
      "releaseYear": 2011,
      "durationInSeconds": 101
    },
    {
      "id": "1f83fb7c-c220-40f2-9dd0-87443ee00532",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Ernst Skeat",
      "numberOfStreams": 3503,
      "releaseYear": 1986,
      "durationInSeconds": 196
    },
    {
      "id": "10fe3beb-8ff6-4366-9226-930cd072a3df",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "artistName": "Jayme Duchateau",
      "numberOfStreams": 39,
      "releaseYear": 2012,
      "durationInSeconds": 467
    },
    {
      "id": "71663420-490e-412c-bbe3-a12c757e360d",
      "songName": "Morbi a ipsum.",
      "artistName": "Kathleen Took",
      "numberOfStreams": 754,
      "releaseYear": 2001,
      "durationInSeconds": 235
    },
    {
      "id": "9bffd527-6c33-4ad3-ad48-850aee3e061b",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Frederique Dooland",
      "numberOfStreams": 2653,
      "releaseYear": 2004,
      "durationInSeconds": 152
    },
    {
      "id": "86c43477-3797-4fce-9603-da6bf0f3eb74",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Alethea Longstaffe",
      "numberOfStreams": 1944,
      "releaseYear": 1993,
      "durationInSeconds": 301
    },
    {
      "id": "514fd871-4992-4c62-a749-2013b7a4cced",
      "songName": "Fusce consequat.",
      "artistName": "Thoma Mounter",
      "numberOfStreams": 648,
      "releaseYear": 1992,
      "durationInSeconds": 31
    },
    {
      "id": "148686b5-e499-47f7-915f-26c1f1f8ff71",
      "songName": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "artistName": "Peter Truswell",
      "numberOfStreams": 3578,
      "releaseYear": 1998,
      "durationInSeconds": 98
    },
    {
      "id": "0761c1b0-1413-4322-8146-232b00aae1b8",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Isahella Jikylls",
      "numberOfStreams": 1626,
      "releaseYear": 1997,
      "durationInSeconds": 203
    },
    {
      "id": "59e2889a-fa84-40be-9551-52d7d23c16bc",
      "songName": "Donec posuere metus vitae ipsum.",
      "artistName": "Park Duffree",
      "numberOfStreams": 195,
      "releaseYear": 1993,
      "durationInSeconds": 209
    },
    {
      "id": "21d6cafb-fb36-45a5-af93-3cb670c9c482",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Cornela Vasyutichev",
      "numberOfStreams": 2064,
      "releaseYear": 2003,
      "durationInSeconds": 407
    },
    {
      "id": "d46eeaf7-453e-4bdb-8b0d-dc2e76fd0a92",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Caroline Littefair",
      "numberOfStreams": 878,
      "releaseYear": 2011,
      "durationInSeconds": 196
    },
    {
      "id": "f470d048-0789-431c-9e55-7dd6e962665e",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Huey Mackerel",
      "numberOfStreams": 2534,
      "releaseYear": 1993,
      "durationInSeconds": 98
    },
    {
      "id": "0303120c-f965-447b-a6b9-fd81241d5bcb",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Desirae Pither",
      "numberOfStreams": 2828,
      "releaseYear": 2005,
      "durationInSeconds": 312
    },
    {
      "id": "6192865b-734c-42ac-8471-90d5c0322c16",
      "songName": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "artistName": "Marlyn Hendonson",
      "numberOfStreams": 3220,
      "releaseYear": 1993,
      "durationInSeconds": 420
    },
    {
      "id": "69267bc3-f8c4-4720-82fa-5bf4053cbe87",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Georgiana Whiting",
      "numberOfStreams": 4778,
      "releaseYear": 2006,
      "durationInSeconds": 113
    },
    {
      "id": "697eddbc-b49e-4472-9143-127f649b3efd",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Kaylyn Linny",
      "numberOfStreams": 696,
      "releaseYear": 2009,
      "durationInSeconds": 424
    },
    {
      "id": "29d84483-5f5c-4792-90d9-15b726dade97",
      "songName": "Curabitur convallis.",
      "artistName": "Jaymee Woodman",
      "numberOfStreams": 3969,
      "releaseYear": 1999,
      "durationInSeconds": 441
    },
    {
      "id": "626b2660-024a-49dc-a877-4d4043428531",
      "songName": "Ut tellus.",
      "artistName": "Siegfried Dighton",
      "numberOfStreams": 1567,
      "releaseYear": 1998,
      "durationInSeconds": 152
    },
    {
      "id": "7c897498-e189-482f-ab73-62b283b59d82",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Sophie Effaunt",
      "numberOfStreams": 4433,
      "releaseYear": 2006,
      "durationInSeconds": 263
    },
    {
      "id": "b9e8887e-42ca-44be-9b78-fb78f644f2c9",
      "songName": "Suspendisse potenti.",
      "artistName": "Dolley Kunzelmann",
      "numberOfStreams": 4303,
      "releaseYear": 2007,
      "durationInSeconds": 274
    },
    {
      "id": "a33802a0-8c68-42b0-a348-85d51a9e5393",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Fax MacPaik",
      "numberOfStreams": 3757,
      "releaseYear": 1986,
      "durationInSeconds": 396
    },
    {
      "id": "cfb4e156-c656-4669-9152-2d4027645acb",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Stormie Lowth",
      "numberOfStreams": 937,
      "releaseYear": 1998,
      "durationInSeconds": 83
    },
    {
      "id": "44de675a-dbf9-4d87-b82b-28de5a02baaf",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Dorelle Addionisio",
      "numberOfStreams": 2528,
      "releaseYear": 2010,
      "durationInSeconds": 391
    },
    {
      "id": "fc1d0ef1-9dd9-4f54-8fa6-cf1162361fff",
      "songName": "Fusce consequat.",
      "artistName": "Andria Farrans",
      "numberOfStreams": 1987,
      "releaseYear": 2005,
      "durationInSeconds": 164
    },
    {
      "id": "da9e66ba-3eaf-4c0b-9ca5-72b7efdb4f5e",
      "songName": "Vivamus tortor.",
      "artistName": "Cindee Ricards",
      "numberOfStreams": 1335,
      "releaseYear": 2007,
      "durationInSeconds": 297
    },
    {
      "id": "cb82588d-9795-4a67-9f6f-57dffcd06581",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      "artistName": "Glen Verlinde",
      "numberOfStreams": 4448,
      "releaseYear": 1986,
      "durationInSeconds": 462
    },
    {
      "id": "123a8642-5f30-4e59-bbb4-62336bb236f7",
      "songName": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "artistName": "Hillard Gurery",
      "numberOfStreams": 3337,
      "releaseYear": 1964,
      "durationInSeconds": 55
    },
    {
      "id": "cf4b61d8-1635-4c5b-8d96-9a9e24a81c06",
      "songName": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      "artistName": "Corbet Pattinson",
      "numberOfStreams": 196,
      "releaseYear": 2010,
      "durationInSeconds": 428
    },
    {
      "id": "4033adc4-7700-468a-947c-e532d48eb112",
      "songName": "Maecenas ut massa quis augue luctus tincidunt.",
      "artistName": "Genevra Clare",
      "numberOfStreams": 4524,
      "releaseYear": 2008,
      "durationInSeconds": 467
    },
    {
      "id": "e177ca37-3e82-41dc-83c0-6943a142ab72",
      "songName": "Nunc purus.",
      "artistName": "Rosella Crewe",
      "numberOfStreams": 135,
      "releaseYear": 2011,
      "durationInSeconds": 209
    },
    {
      "id": "c387aaf6-29c6-4d6b-bcca-57e127cc1405",
      "songName": "Nunc nisl.",
      "artistName": "Ardeen Jerrems",
      "numberOfStreams": 1899,
      "releaseYear": 1999,
      "durationInSeconds": 98
    },
    {
      "id": "673945d0-853a-4e4a-965f-abe1b97ba1ee",
      "songName": "Nunc nisl.",
      "artistName": "Bird Kloisner",
      "numberOfStreams": 3585,
      "releaseYear": 2005,
      "durationInSeconds": 6
    },
    {
      "id": "74d549b8-4faf-4aab-aaa7-f348d086ad4d",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Benny Blewitt",
      "numberOfStreams": 4557,
      "releaseYear": 1969,
      "durationInSeconds": 270
    },
    {
      "id": "73cf2e49-3612-4f63-8564-7ca63ff70af9",
      "songName": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "artistName": "Mal Hedges",
      "numberOfStreams": 3219,
      "releaseYear": 2012,
      "durationInSeconds": 475
    },
    {
      "id": "40f8f54c-d582-4688-b870-d7331e047061",
      "songName": "In quis justo.",
      "artistName": "Janel Blumson",
      "numberOfStreams": 4522,
      "releaseYear": 2006,
      "durationInSeconds": 389
    },
    {
      "id": "14967d39-a165-4182-9cfb-058888aa8932",
      "songName": "Nulla ut erat id mauris vulputate elementum.",
      "artistName": "Skylar Tynan",
      "numberOfStreams": 4490,
      "releaseYear": 1995,
      "durationInSeconds": 401
    },
    {
      "id": "1cdfc0b7-8ad6-44b7-bc39-085108cfaf7c",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Mariellen Witherdon",
      "numberOfStreams": 2772,
      "releaseYear": 1994,
      "durationInSeconds": 120
    },
    {
      "id": "49602b12-995d-4513-b951-2839e9c1ca3d",
      "songName": "Pellentesque at nulla.",
      "artistName": "Saxe Chelley",
      "numberOfStreams": 2753,
      "releaseYear": 2004,
      "durationInSeconds": 466
    },
    {
      "id": "13dbcd43-0855-4a1a-8e5b-5b2473b55633",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Novelia Venton",
      "numberOfStreams": 4543,
      "releaseYear": 2009,
      "durationInSeconds": 253
    },
    {
      "id": "713a6f37-9bfc-4a18-8cd0-715bb2fbc71c",
      "songName": "Proin at turpis a pede posuere nonummy.",
      "artistName": "Nanny Beel",
      "numberOfStreams": 45,
      "releaseYear": 2001,
      "durationInSeconds": 124
    },
    {
      "id": "2f569f0d-fa3b-416d-bef3-1feb119ac075",
      "songName": "Cras pellentesque volutpat dui.",
      "artistName": "Gabi Mattiato",
      "numberOfStreams": 2209,
      "releaseYear": 2002,
      "durationInSeconds": 63
    },
    {
      "id": "6a38c4fa-3128-46a7-afcb-113d67181430",
      "songName": "Morbi ut odio.",
      "artistName": "Diahann Mc Caghan",
      "numberOfStreams": 3078,
      "releaseYear": 1992,
      "durationInSeconds": 52
    },
    {
      "id": "0485e49d-10e2-4a5f-95f7-d50189484572",
      "songName": "Donec semper sapien a libero.",
      "artistName": "Arnold Longford",
      "numberOfStreams": 2361,
      "releaseYear": 1993,
      "durationInSeconds": 66
    },
    {
      "id": "7b924842-149a-41bf-907a-896ffb133672",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Ester Yarrington",
      "numberOfStreams": 2786,
      "releaseYear": 2012,
      "durationInSeconds": 136
    },
    {
      "id": "8f4a9e95-47f2-490c-814f-b6ba62f0f3e0",
      "songName": "Nulla justo.",
      "artistName": "Barton Dalbey",
      "numberOfStreams": 1364,
      "releaseYear": 1991,
      "durationInSeconds": 59
    },
    {
      "id": "82b834e2-cca2-4f8f-9f45-e07a4a63c22d",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Janeen Pooly",
      "numberOfStreams": 4294,
      "releaseYear": 2006,
      "durationInSeconds": 354
    },
    {
      "id": "cbbea90c-75d0-454e-b6ca-70a8f5d85b4f",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Abbie Shawdforth",
      "numberOfStreams": 2957,
      "releaseYear": 2009,
      "durationInSeconds": 477
    },
    {
      "id": "a5a7dffc-9764-4897-8810-5581d60e440a",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Toni Tremethack",
      "numberOfStreams": 1259,
      "releaseYear": 2006,
      "durationInSeconds": 295
    },
    {
      "id": "1f596405-7450-4860-8183-3e5b52569dd4",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Arnie Dimont",
      "numberOfStreams": 1701,
      "releaseYear": 1988,
      "durationInSeconds": 80
    },
    {
      "id": "4a7a3c7a-92fc-4482-bc19-f9ea5961ee27",
      "songName": "Nunc purus.",
      "artistName": "Ryan Brotherheed",
      "numberOfStreams": 255,
      "releaseYear": 1997,
      "durationInSeconds": 472
    },
    {
      "id": "ebe0559c-f410-40d3-b9b6-b0aadd97339f",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Reine Fawson",
      "numberOfStreams": 3246,
      "releaseYear": 2009,
      "durationInSeconds": 194
    },
    {
      "id": "13e0bf52-55e9-4606-a70d-54aadde686bf",
      "songName": "Sed sagittis.",
      "artistName": "Elizabeth Antonat",
      "numberOfStreams": 688,
      "releaseYear": 2002,
      "durationInSeconds": 266
    },
    {
      "id": "3777f82c-75df-4534-8ef5-c54fd01c3336",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Dyana Cubberley",
      "numberOfStreams": 3156,
      "releaseYear": 1990,
      "durationInSeconds": 232
    },
    {
      "id": "30c1dd8f-ea15-42db-a1a2-37e871eea113",
      "songName": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "artistName": "Suki Dobel",
      "numberOfStreams": 4727,
      "releaseYear": 1996,
      "durationInSeconds": 134
    },
    {
      "id": "3d6140a4-6641-47e5-a4ed-e46c16340461",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Seamus Samwaye",
      "numberOfStreams": 4642,
      "releaseYear": 2002,
      "durationInSeconds": 149
    },
    {
      "id": "c8037988-c55d-42d1-85ad-c2916d813543",
      "songName": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "artistName": "Blayne Cristofano",
      "numberOfStreams": 3284,
      "releaseYear": 2002,
      "durationInSeconds": 51
    },
    {
      "id": "33a3f611-e9c8-464f-981e-ea26029524dd",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Vin Grooby",
      "numberOfStreams": 3171,
      "releaseYear": 2003,
      "durationInSeconds": 44
    },
    {
      "id": "cb0781ee-f9b4-4b47-a91b-4991beb47d99",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      "artistName": "Ericka Rillstone",
      "numberOfStreams": 57,
      "releaseYear": 2005,
      "durationInSeconds": 104
    },
    {
      "id": "df8bc810-9358-45ad-bdf6-b5e934bc4077",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Kliment Braunston",
      "numberOfStreams": 1720,
      "releaseYear": 1969,
      "durationInSeconds": 443
    },
    {
      "id": "c551e344-4253-4497-914d-78525f50bb40",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Celeste McCay",
      "numberOfStreams": 4443,
      "releaseYear": 2007,
      "durationInSeconds": 442
    },
    {
      "id": "f0086545-14fb-45df-9cfc-3be13e530e7d",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Pietro Mulryan",
      "numberOfStreams": 2930,
      "releaseYear": 1994,
      "durationInSeconds": 334
    },
    {
      "id": "17c83206-b517-4a4f-84ba-22b45de107a9",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Lazarus Saleway",
      "numberOfStreams": 3734,
      "releaseYear": 1995,
      "durationInSeconds": 292
    },
    {
      "id": "427b2e0e-737c-4892-9116-bd91cebd96a5",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Vanya Tredwell",
      "numberOfStreams": 1531,
      "releaseYear": 2005,
      "durationInSeconds": 343
    },
    {
      "id": "9382d585-a0f7-4bf2-a2b9-eeff07524545",
      "songName": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      "artistName": "Nanny Hambribe",
      "numberOfStreams": 3720,
      "releaseYear": 2010,
      "durationInSeconds": 14
    },
    {
      "id": "ff2bcd01-7236-4f64-ae68-558ec8c8ed40",
      "songName": "Pellentesque viverra pede ac diam.",
      "artistName": "Chrystel Hughland",
      "numberOfStreams": 1252,
      "releaseYear": 2003,
      "durationInSeconds": 258
    },
    {
      "id": "d3fc909f-e8f0-428f-8ad2-3d1ea787a8c5",
      "songName": "Nam nulla.",
      "artistName": "Lowrance Tudhope",
      "numberOfStreams": 4050,
      "releaseYear": 2005,
      "durationInSeconds": 137
    },
    {
      "id": "389faee7-0041-4059-adc9-d03e7f0de30e",
      "songName": "Integer ac leo.",
      "artistName": "Nathanil Le Page",
      "numberOfStreams": 3341,
      "releaseYear": 2008,
      "durationInSeconds": 50
    },
    {
      "id": "4ac5b7bf-d0b9-4709-989c-b581c02bd6e1",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Rancell Ubanks",
      "numberOfStreams": 2931,
      "releaseYear": 1994,
      "durationInSeconds": 383
    },
    {
      "id": "795a9ca5-84b7-4329-895a-139171ee462a",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Cosmo Worledge",
      "numberOfStreams": 4124,
      "releaseYear": 1990,
      "durationInSeconds": 321
    },
    {
      "id": "c82d6b1d-4972-441b-a08e-6c61324fc6f4",
      "songName": "Morbi non lectus.",
      "artistName": "Linoel Maceur",
      "numberOfStreams": 2931,
      "releaseYear": 2012,
      "durationInSeconds": 152
    },
    {
      "id": "4640a88e-a82a-4331-94b2-45f60567bd7d",
      "songName": "Donec ut mauris eget massa tempor convallis.",
      "artistName": "Tybie Gladwin",
      "numberOfStreams": 2548,
      "releaseYear": 1991,
      "durationInSeconds": 216
    },
    {
      "id": "24134816-061e-462a-9695-c446b2542996",
      "songName": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      "artistName": "Chevalier Scully",
      "numberOfStreams": 2600,
      "releaseYear": 1998,
      "durationInSeconds": 77
    },
    {
      "id": "0f72246b-ff5d-415a-9a87-940c652a4874",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Sampson MacArte",
      "numberOfStreams": 523,
      "releaseYear": 2008,
      "durationInSeconds": 473
    },
    {
      "id": "2c162bed-8496-4303-b6ca-19f07fa52bca",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Buddy Massow",
      "numberOfStreams": 4909,
      "releaseYear": 1994,
      "durationInSeconds": 489
    },
    {
      "id": "a6d8ede9-b422-43e8-830f-edb4d5825567",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Pansie Dachey",
      "numberOfStreams": 803,
      "releaseYear": 2010,
      "durationInSeconds": 412
    },
    {
      "id": "fde39ace-0b6c-4381-ad2f-9518e548f658",
      "songName": "Morbi ut odio.",
      "artistName": "Leland Cuppleditch",
      "numberOfStreams": 378,
      "releaseYear": 2005,
      "durationInSeconds": 195
    },
    {
      "id": "29a8c87e-f8b4-43a9-8ff7-92d43b0994e7",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Eustace Taylo",
      "numberOfStreams": 892,
      "releaseYear": 2010,
      "durationInSeconds": 85
    },
    {
      "id": "5d4bc9e1-1aa3-4812-a3bc-a9a299232af3",
      "songName": "Integer ac neque.",
      "artistName": "Suzanna Kirwan",
      "numberOfStreams": 2900,
      "releaseYear": 2012,
      "durationInSeconds": 280
    },
    {
      "id": "e9e87c83-5ac6-4145-935a-0632c14270c1",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Effie Lydiard",
      "numberOfStreams": 248,
      "releaseYear": 1985,
      "durationInSeconds": 117
    },
    {
      "id": "8155f2a6-4374-4472-b57f-8ddab8fb23cf",
      "songName": "Aenean fermentum.",
      "artistName": "Vassily Trewett",
      "numberOfStreams": 1196,
      "releaseYear": 2007,
      "durationInSeconds": 106
    },
    {
      "id": "688eb240-f185-48ff-a68f-4763ce9bfba6",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Prudi Seint",
      "numberOfStreams": 4502,
      "releaseYear": 2012,
      "durationInSeconds": 191
    },
    {
      "id": "fa36f005-30d1-40f8-9f21-c56a21d5742f",
      "songName": "Vivamus tortor.",
      "artistName": "Addia Alaway",
      "numberOfStreams": 3737,
      "releaseYear": 1999,
      "durationInSeconds": 149
    },
    {
      "id": "ac9fe04b-39fd-45bc-9476-da72d6ba7555",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Sibilla Pestell",
      "numberOfStreams": 2163,
      "releaseYear": 2009,
      "durationInSeconds": 390
    },
    {
      "id": "0d0d5148-7f6e-44c7-95e0-1dfba1c63e1d",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Estel Frearson",
      "numberOfStreams": 184,
      "releaseYear": 1994,
      "durationInSeconds": 168
    },
    {
      "id": "b1068546-1f45-4972-b0a9-6ffec980e5d0",
      "songName": "Duis bibendum.",
      "artistName": "Milly Redbourn",
      "numberOfStreams": 1719,
      "releaseYear": 1991,
      "durationInSeconds": 201
    },
    {
      "id": "43316580-bbb8-475c-b60d-4668f41c3d7e",
      "songName": "Morbi non lectus.",
      "artistName": "Hilary King",
      "numberOfStreams": 465,
      "releaseYear": 2011,
      "durationInSeconds": 337
    },
    {
      "id": "833c9fcb-b0f4-47bd-81d8-5c0b9824b8cc",
      "songName": "Curabitur convallis.",
      "artistName": "Nevins McGougan",
      "numberOfStreams": 680,
      "releaseYear": 1993,
      "durationInSeconds": 214
    },
    {
      "id": "3120619a-7e12-4d44-b1d6-22151a362a40",
      "songName": "In quis justo.",
      "artistName": "Horten Sharpley",
      "numberOfStreams": 3460,
      "releaseYear": 2001,
      "durationInSeconds": 80
    },
    {
      "id": "d5164f45-efd3-45a4-a4b3-5233bc8afc43",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Floria Howlin",
      "numberOfStreams": 1824,
      "releaseYear": 2007,
      "durationInSeconds": 310
    },
    {
      "id": "2b7b97e5-0adb-4eb1-807f-ceb491abcfb9",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Baily Cantopher",
      "numberOfStreams": 1882,
      "releaseYear": 1994,
      "durationInSeconds": 190
    },
    {
      "id": "9b5a500e-14bc-46cb-bf5e-d70541a0a23f",
      "songName": "Donec dapibus.",
      "artistName": "Karlen Bernadon",
      "numberOfStreams": 1659,
      "releaseYear": 2010,
      "durationInSeconds": 133
    },
    {
      "id": "72c36385-ffc1-4c10-8388-0c9f0569179e",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Hubey McGiffie",
      "numberOfStreams": 4171,
      "releaseYear": 2008,
      "durationInSeconds": 408
    },
    {
      "id": "b3d678e3-e6ef-42fc-a84c-91723d753e47",
      "songName": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "artistName": "Rene Winton",
      "numberOfStreams": 2047,
      "releaseYear": 2011,
      "durationInSeconds": 339
    },
    {
      "id": "7c781e8c-acaf-4346-88ee-05f6e2b7201f",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Aggie Sotheby",
      "numberOfStreams": 2697,
      "releaseYear": 2001,
      "durationInSeconds": 186
    },
    {
      "id": "e48f45f9-8ced-499f-9594-405f0a59f6eb",
      "songName": "Nulla tellus.",
      "artistName": "Laird Haker",
      "numberOfStreams": 4396,
      "releaseYear": 1985,
      "durationInSeconds": 424
    },
    {
      "id": "6e5754f7-ee8e-4935-9f91-bdd4e5635e46",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Ameline Ferguson",
      "numberOfStreams": 1683,
      "releaseYear": 2012,
      "durationInSeconds": 162
    },
    {
      "id": "e76b69c6-b4a0-4550-b820-9f5ec7047723",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Adele Brandli",
      "numberOfStreams": 621,
      "releaseYear": 2007,
      "durationInSeconds": 216
    },
    {
      "id": "89a85817-9627-4133-aa3f-60f32a0b9994",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Lainey Dodgshun",
      "numberOfStreams": 163,
      "releaseYear": 2004,
      "durationInSeconds": 419
    },
    {
      "id": "d65710c0-782b-4087-8ecd-74369df7f4e1",
      "songName": "Integer ac neque.",
      "artistName": "Glenden Cornford",
      "numberOfStreams": 3194,
      "releaseYear": 1993,
      "durationInSeconds": 308
    },
    {
      "id": "11ec2bc7-61ea-46ef-96aa-6215a4db67bc",
      "songName": "Aenean lectus.",
      "artistName": "Tawnya Gligoraci",
      "numberOfStreams": 3462,
      "releaseYear": 2012,
      "durationInSeconds": 328
    },
    {
      "id": "75043dbf-7e05-4325-a461-a54bdc63b177",
      "songName": "Morbi a ipsum.",
      "artistName": "Nita Carlin",
      "numberOfStreams": 3766,
      "releaseYear": 1994,
      "durationInSeconds": 351
    },
    {
      "id": "59196e33-e9d7-4e81-b213-385fd10ba45b",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Clara Cay",
      "numberOfStreams": 3497,
      "releaseYear": 1997,
      "durationInSeconds": 334
    },
    {
      "id": "9804b1c9-d638-4f96-ae4b-b737573a98bc",
      "songName": "Fusce consequat.",
      "artistName": "Raynell Hebblewaite",
      "numberOfStreams": 739,
      "releaseYear": 1999,
      "durationInSeconds": 156
    },
    {
      "id": "4fa8679f-fbe7-478c-b2a1-c11f2a8271d6",
      "songName": "Quisque id justo sit amet sapien dignissim vestibulum.",
      "artistName": "Bethanne Bosomworth",
      "numberOfStreams": 1199,
      "releaseYear": 2002,
      "durationInSeconds": 380
    },
    {
      "id": "34e981a8-313e-466e-a589-28f76f3187f3",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Rayshell O'Brian",
      "numberOfStreams": 3583,
      "releaseYear": 2001,
      "durationInSeconds": 273
    },
    {
      "id": "c451a028-cead-4be2-a974-b77f85118f1d",
      "songName": "Aenean auctor gravida sem.",
      "artistName": "Saidee McGeown",
      "numberOfStreams": 886,
      "releaseYear": 2001,
      "durationInSeconds": 295
    },
    {
      "id": "d935999e-a2c8-4454-a4a6-15e4731079cb",
      "songName": "Suspendisse potenti.",
      "artistName": "Delcine Zukierman",
      "numberOfStreams": 1278,
      "releaseYear": 2008,
      "durationInSeconds": 53
    },
    {
      "id": "a312ebc8-ade1-4179-a3ac-8fd0b1afefe6",
      "songName": "Duis aliquam convallis nunc.",
      "artistName": "Shantee Horsefield",
      "numberOfStreams": 2918,
      "releaseYear": 2005,
      "durationInSeconds": 223
    },
    {
      "id": "c8b4f90d-4ed1-4ae1-ad6e-dc15f372dd7a",
      "songName": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "artistName": "Brandy Eve",
      "numberOfStreams": 956,
      "releaseYear": 1998,
      "durationInSeconds": 221
    },
    {
      "id": "11d83b29-a0bd-41dc-b406-53c7bc041d78",
      "songName": "Nunc purus.",
      "artistName": "Bayard Rainsbury",
      "numberOfStreams": 4614,
      "releaseYear": 2012,
      "durationInSeconds": 8
    },
    {
      "id": "d88d4787-e5de-4d31-82dd-0f7bed616a11",
      "songName": "Maecenas rhoncus aliquam lacus.",
      "artistName": "Romola Songust",
      "numberOfStreams": 4395,
      "releaseYear": 1992,
      "durationInSeconds": 352
    },
    {
      "id": "f117117f-2761-4aa9-a3fc-038823e76474",
      "songName": "Quisque ut erat.",
      "artistName": "Annette Biernat",
      "numberOfStreams": 4868,
      "releaseYear": 2001,
      "durationInSeconds": 485
    },
    {
      "id": "47032002-e899-4381-8255-10037d8d2017",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Catha Drakeford",
      "numberOfStreams": 4836,
      "releaseYear": 2006,
      "durationInSeconds": 28
    },
    {
      "id": "a7d436b9-d15a-4ee2-bc1d-f764c16071d2",
      "songName": "Nulla ut erat id mauris vulputate elementum.",
      "artistName": "Inga Goodger",
      "numberOfStreams": 1342,
      "releaseYear": 2004,
      "durationInSeconds": 470
    },
    {
      "id": "02b46feb-2148-4cf4-948c-a43688f9f41a",
      "songName": "Aliquam quis turpis eget elit sodales scelerisque.",
      "artistName": "Ernest Ansty",
      "numberOfStreams": 3831,
      "releaseYear": 2000,
      "durationInSeconds": 213
    },
    {
      "id": "8ab89649-b2cd-4150-abeb-141b37b1b8f1",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Idalina Ritchley",
      "numberOfStreams": 3067,
      "releaseYear": 2007,
      "durationInSeconds": 164
    },
    {
      "id": "2ea29429-3c74-4f6d-b327-f5732669ce93",
      "songName": "Nunc purus.",
      "artistName": "Galven Wilhelmy",
      "numberOfStreams": 4695,
      "releaseYear": 2010,
      "durationInSeconds": 100
    },
    {
      "id": "61379b66-9885-4ae3-8d24-3477cbfb3920",
      "songName": "Nulla ac enim.",
      "artistName": "Yoshi Broadway",
      "numberOfStreams": 1420,
      "releaseYear": 2003,
      "durationInSeconds": 473
    },
    {
      "id": "0e8cae7f-66ea-441f-a7ea-08da51e373b6",
      "songName": "Maecenas rhoncus aliquam lacus.",
      "artistName": "Devin Huffa",
      "numberOfStreams": 2991,
      "releaseYear": 1992,
      "durationInSeconds": 463
    },
    {
      "id": "6bac36a8-03de-4ed4-a5be-56365599a622",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Lurline McGraffin",
      "numberOfStreams": 1121,
      "releaseYear": 1996,
      "durationInSeconds": 413
    },
    {
      "id": "fb3f1ae1-e1fb-4f6e-b1e1-49639c550929",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Dru Dooher",
      "numberOfStreams": 2697,
      "releaseYear": 1995,
      "durationInSeconds": 306
    },
    {
      "id": "ccb01c44-39fe-433b-8703-b859463d7a5c",
      "songName": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "artistName": "Harwell Meriel",
      "numberOfStreams": 159,
      "releaseYear": 1992,
      "durationInSeconds": 247
    },
    {
      "id": "6b40bb37-26ef-448e-87f1-e14178c09bf2",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Yuri Welch",
      "numberOfStreams": 4461,
      "releaseYear": 1987,
      "durationInSeconds": 169
    },
    {
      "id": "ab0142a6-cec5-44a8-ab2c-fc72b8164792",
      "songName": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "artistName": "Torrie Ginglell",
      "numberOfStreams": 1839,
      "releaseYear": 2001,
      "durationInSeconds": 476
    },
    {
      "id": "62b835c6-6caf-48d8-848c-1e465a21959a",
      "songName": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "artistName": "Christel Georgins",
      "numberOfStreams": 1623,
      "releaseYear": 2003,
      "durationInSeconds": 475
    },
    {
      "id": "9b1e75e0-3a77-4f55-91e8-be432a1e4526",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Adey Ruffles",
      "numberOfStreams": 732,
      "releaseYear": 2002,
      "durationInSeconds": 307
    },
    {
      "id": "7ad23797-bb67-458b-a4b1-dee5be681265",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Ermina Collopy",
      "numberOfStreams": 597,
      "releaseYear": 2008,
      "durationInSeconds": 282
    },
    {
      "id": "8f900b4e-35a2-402f-b777-e85ec2271fe1",
      "songName": "Donec ut dolor.",
      "artistName": "August Robinette",
      "numberOfStreams": 3090,
      "releaseYear": 1991,
      "durationInSeconds": 466
    },
    {
      "id": "1e484e3e-3cdb-46c0-bac9-f749b2f8ab1b",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Maxy Persey",
      "numberOfStreams": 3578,
      "releaseYear": 1992,
      "durationInSeconds": 149
    },
    {
      "id": "b21a489c-99a4-4de7-aadb-48c69839dfc6",
      "songName": "Mauris sit amet eros.",
      "artistName": "Parke Duggen",
      "numberOfStreams": 1561,
      "releaseYear": 1994,
      "durationInSeconds": 119
    },
    {
      "id": "a9543086-9355-47fe-8a19-7b5185bd5e58",
      "songName": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "artistName": "Helyn Guillond",
      "numberOfStreams": 1329,
      "releaseYear": 2003,
      "durationInSeconds": 278
    },
    {
      "id": "be5e73ea-e5d9-4184-bf5f-c58aba1ff75d",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Nettle Nannini",
      "numberOfStreams": 1104,
      "releaseYear": 2007,
      "durationInSeconds": 441
    },
    {
      "id": "26d8c0d6-36c2-486b-98aa-cb286d6a6dda",
      "songName": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "artistName": "Lorrie Wardroper",
      "numberOfStreams": 578,
      "releaseYear": 2008,
      "durationInSeconds": 295
    },
    {
      "id": "d31ef07d-ef35-4697-a95e-d546d5fbc30b",
      "songName": "Nulla nisl.",
      "artistName": "Cliff Sillick",
      "numberOfStreams": 4998,
      "releaseYear": 1984,
      "durationInSeconds": 337
    },
    {
      "id": "ed1533aa-4ada-4856-9ec5-b89e2f12eb21",
      "songName": "Nulla nisl.",
      "artistName": "Brear Kollas",
      "numberOfStreams": 4354,
      "releaseYear": 1992,
      "durationInSeconds": 110
    },
    {
      "id": "80a86a33-c376-4040-af72-815d2b9ae621",
      "songName": "Proin risus.",
      "artistName": "Barb Ching",
      "numberOfStreams": 2765,
      "releaseYear": 1990,
      "durationInSeconds": 75
    },
    {
      "id": "99768520-f855-49bb-b2cc-9cf5dbfaa936",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Wynne Doring",
      "numberOfStreams": 1618,
      "releaseYear": 1979,
      "durationInSeconds": 248
    },
    {
      "id": "a9dfb6df-48e6-4dba-bb0e-eb4ffff9993b",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Tarrah De Beauchemp",
      "numberOfStreams": 4504,
      "releaseYear": 2006,
      "durationInSeconds": 66
    },
    {
      "id": "4a0d77c7-d7fc-41ce-94bc-743134c9e92e",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Stephana Greeve",
      "numberOfStreams": 3259,
      "releaseYear": 1996,
      "durationInSeconds": 260
    },
    {
      "id": "1afb29fa-aa7b-4fd4-9840-d4220b320900",
      "songName": "Donec ut dolor.",
      "artistName": "Helaine O'Sheeryne",
      "numberOfStreams": 1379,
      "releaseYear": 2004,
      "durationInSeconds": 32
    },
    {
      "id": "3f8a2228-1ca3-4908-95d0-65cb5add4ddb",
      "songName": "Vivamus tortor.",
      "artistName": "Carrie Sweetzer",
      "numberOfStreams": 2244,
      "releaseYear": 1984,
      "durationInSeconds": 165
    },
    {
      "id": "68133d96-e363-4f32-a723-c22412c8ed93",
      "songName": "In quis justo.",
      "artistName": "Donica Jestico",
      "numberOfStreams": 2903,
      "releaseYear": 1997,
      "durationInSeconds": 364
    },
    {
      "id": "2d265585-c052-4b34-8266-9663839fb50d",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Agnes Saunter",
      "numberOfStreams": 585,
      "releaseYear": 2007,
      "durationInSeconds": 451
    },
    {
      "id": "047339f7-d4db-4c76-8e24-d6c8ad40eaf0",
      "songName": "Sed sagittis.",
      "artistName": "Morena Orrill",
      "numberOfStreams": 4368,
      "releaseYear": 2010,
      "durationInSeconds": 36
    },
    {
      "id": "acdfeed5-293f-4b7c-af49-6d7c0a9f0547",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Tomasina Henric",
      "numberOfStreams": 4047,
      "releaseYear": 2011,
      "durationInSeconds": 325
    },
    {
      "id": "ead9bfc6-ed3e-4eb8-a8fc-5bfe0ad86bf2",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Nanice Rivelin",
      "numberOfStreams": 2988,
      "releaseYear": 2000,
      "durationInSeconds": 165
    },
    {
      "id": "fd05fda4-5ed4-4b2a-af56-c715a4d59f9a",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Matteo Girkins",
      "numberOfStreams": 2829,
      "releaseYear": 2001,
      "durationInSeconds": 421
    },
    {
      "id": "5c0bfdb0-b20d-495d-90a6-98718f25c40b",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Minnnie Watkiss",
      "numberOfStreams": 4910,
      "releaseYear": 2006,
      "durationInSeconds": 317
    },
    {
      "id": "94727fc3-f9c3-4dbe-a1b3-3ee8d054fa00",
      "songName": "Duis aliquam convallis nunc.",
      "artistName": "Michaelina Segrott",
      "numberOfStreams": 3020,
      "releaseYear": 2007,
      "durationInSeconds": 447
    },
    {
      "id": "82f7142f-cb9e-4d73-a4ad-15d7d3bd87b0",
      "songName": "Nullam varius.",
      "artistName": "Cal Coxwell",
      "numberOfStreams": 3521,
      "releaseYear": 1992,
      "durationInSeconds": 102
    },
    {
      "id": "d60d42e3-e219-40ec-94b3-c2d86184ce48",
      "songName": "Sed accumsan felis.",
      "artistName": "Guinevere Le Leu",
      "numberOfStreams": 3027,
      "releaseYear": 1999,
      "durationInSeconds": 200
    },
    {
      "id": "f06f70f9-55dc-46c5-8e70-1e48338f2f6a",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Haroun Isherwood",
      "numberOfStreams": 2277,
      "releaseYear": 2002,
      "durationInSeconds": 489
    },
    {
      "id": "16034f6d-f315-4783-aad2-ebfeef74661f",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Larine Roseman",
      "numberOfStreams": 1635,
      "releaseYear": 2009,
      "durationInSeconds": 403
    },
    {
      "id": "b6c3fb65-8e9b-4aac-bae6-1a50ae3f456e",
      "songName": "Curabitur gravida nisi at nibh.",
      "artistName": "Milo Burrel",
      "numberOfStreams": 3240,
      "releaseYear": 2005,
      "durationInSeconds": 492
    },
    {
      "id": "85941860-37dd-4c0a-9684-718f3e0b30e2",
      "songName": "Integer a nibh.",
      "artistName": "Donielle Glidden",
      "numberOfStreams": 2874,
      "releaseYear": 1995,
      "durationInSeconds": 489
    },
    {
      "id": "1bc03fb4-3eae-490d-906b-753de8075259",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Barrie Martijn",
      "numberOfStreams": 2483,
      "releaseYear": 1997,
      "durationInSeconds": 322
    },
    {
      "id": "e16aa05d-5d3a-487e-8b4e-c7901a448cd7",
      "songName": "Praesent lectus.",
      "artistName": "Sosanna Thumim",
      "numberOfStreams": 1063,
      "releaseYear": 2009,
      "durationInSeconds": 261
    },
    {
      "id": "4693f993-c5df-4507-b071-eeaeb6f2d1a0",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Sonni Acaster",
      "numberOfStreams": 124,
      "releaseYear": 2004,
      "durationInSeconds": 247
    },
    {
      "id": "951ecd08-6f2b-4668-9645-042406b4f359",
      "songName": "Donec semper sapien a libero.",
      "artistName": "Wood Letrange",
      "numberOfStreams": 4904,
      "releaseYear": 2013,
      "durationInSeconds": 376
    },
    {
      "id": "360902dd-b0b9-4cb4-a5de-9bbd1dbe3cf8",
      "songName": "Mauris sit amet eros.",
      "artistName": "Arturo Corfield",
      "numberOfStreams": 132,
      "releaseYear": 1995,
      "durationInSeconds": 109
    },
    {
      "id": "2c7b6079-e294-4d46-ac86-7f113e670a39",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Arri Gerty",
      "numberOfStreams": 3647,
      "releaseYear": 1992,
      "durationInSeconds": 409
    },
    {
      "id": "6f7e44db-101f-4375-86d5-1c8503609bd3",
      "songName": "Morbi a ipsum.",
      "artistName": "Sandie Welsh",
      "numberOfStreams": 2974,
      "releaseYear": 2012,
      "durationInSeconds": 67
    },
    {
      "id": "b523a17a-af24-4b7d-8345-76ea8c5c6e9f",
      "songName": "Etiam vel augue.",
      "artistName": "Francyne McClymond",
      "numberOfStreams": 4826,
      "releaseYear": 2012,
      "durationInSeconds": 346
    },
    {
      "id": "89ed0d47-eff8-40b0-88bc-c48461543b34",
      "songName": "Nunc nisl.",
      "artistName": "Stafford Arckoll",
      "numberOfStreams": 4775,
      "releaseYear": 2007,
      "durationInSeconds": 379
    },
    {
      "id": "3f4cde24-af62-47fb-a229-baf0049051bd",
      "songName": "In eleifend quam a odio.",
      "artistName": "Camel Gounet",
      "numberOfStreams": 1245,
      "releaseYear": 2002,
      "durationInSeconds": 247
    },
    {
      "id": "5d2beea0-2a4f-4ba9-b520-3d75e007f1b5",
      "songName": "Vivamus tortor.",
      "artistName": "Marisa Truder",
      "numberOfStreams": 3204,
      "releaseYear": 1992,
      "durationInSeconds": 287
    },
    {
      "id": "a5747d6b-a925-49ba-a9a5-3e63f1480d3d",
      "songName": "Quisque ut erat.",
      "artistName": "Godfrey Butner",
      "numberOfStreams": 1594,
      "releaseYear": 2004,
      "durationInSeconds": 469
    },
    {
      "id": "2348e974-573b-439c-b2b2-02e1b0a8755f",
      "songName": "Mauris ullamcorper purus sit amet nulla.",
      "artistName": "Geraldine Ber",
      "numberOfStreams": 4,
      "releaseYear": 1989,
      "durationInSeconds": 372
    },
    {
      "id": "5087ccc4-1efd-4db7-8788-5277f83f98cf",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Rabbi Dowrey",
      "numberOfStreams": 1358,
      "releaseYear": 1994,
      "durationInSeconds": 449
    },
    {
      "id": "63bfdae1-d29e-422c-98bf-7aa2279dcf6f",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Shelbi Caen",
      "numberOfStreams": 1438,
      "releaseYear": 2000,
      "durationInSeconds": 94
    },
    {
      "id": "612133dc-5073-46f0-8ff5-afd1ace42fa8",
      "songName": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "artistName": "Natividad Olive",
      "numberOfStreams": 797,
      "releaseYear": 1993,
      "durationInSeconds": 256
    },
    {
      "id": "de7c37a7-e660-4daa-abe3-482b26e474ed",
      "songName": "Phasellus in felis.",
      "artistName": "Grier Handman",
      "numberOfStreams": 2435,
      "releaseYear": 2007,
      "durationInSeconds": 98
    },
    {
      "id": "cbb41eae-2b3f-499f-818b-bae3ae2bdfb5",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Janot Paine",
      "numberOfStreams": 4697,
      "releaseYear": 1993,
      "durationInSeconds": 50
    },
    {
      "id": "4c573077-229c-46f0-adcc-be2e695409f5",
      "songName": "Curabitur gravida nisi at nibh.",
      "artistName": "Edik Morilla",
      "numberOfStreams": 3569,
      "releaseYear": 1997,
      "durationInSeconds": 218
    },
    {
      "id": "fb377f66-0897-4d8a-b83a-4d7b24f85cd1",
      "songName": "In eleifend quam a odio.",
      "artistName": "Torre Kolushev",
      "numberOfStreams": 2679,
      "releaseYear": 1992,
      "durationInSeconds": 367
    },
    {
      "id": "15031f90-5771-4ff6-8fc5-f243d3a16c98",
      "songName": "Etiam justo.",
      "artistName": "Morgana Soots",
      "numberOfStreams": 3328,
      "releaseYear": 1987,
      "durationInSeconds": 370
    },
    {
      "id": "03676b37-69ba-40ae-aa22-d71f96556cc9",
      "songName": "Integer ac neque.",
      "artistName": "Bobbie Middle",
      "numberOfStreams": 2577,
      "releaseYear": 1997,
      "durationInSeconds": 230
    },
    {
      "id": "0b62ab78-3080-4cd3-835a-96e451e7867e",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Garret Hiom",
      "numberOfStreams": 2610,
      "releaseYear": 1995,
      "durationInSeconds": 135
    },
    {
      "id": "bf3495e6-87d8-43b2-9287-de59b9700bfc",
      "songName": "Aliquam quis turpis eget elit sodales scelerisque.",
      "artistName": "Joycelin Really",
      "numberOfStreams": 3196,
      "releaseYear": 1909,
      "durationInSeconds": 212
    },
    {
      "id": "1ad6d77a-e22c-48c9-8192-b9f1553d7fb5",
      "songName": "Etiam justo.",
      "artistName": "Kori Fellon",
      "numberOfStreams": 4700,
      "releaseYear": 2008,
      "durationInSeconds": 244
    },
    {
      "id": "599b29f3-864f-4f5e-bd4b-e7ca24cf074f",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Oliy Dautry",
      "numberOfStreams": 3336,
      "releaseYear": 2009,
      "durationInSeconds": 497
    },
    {
      "id": "59d60a8d-7700-4acb-b7ef-1cb59a53fd3d",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Weylin Kernock",
      "numberOfStreams": 2400,
      "releaseYear": 2008,
      "durationInSeconds": 49
    },
    {
      "id": "8bc16730-6a35-4718-bf61-8f9335815cc6",
      "songName": "Vivamus vel nulla eget eros elementum pellentesque.",
      "artistName": "Angy Huie",
      "numberOfStreams": 2914,
      "releaseYear": 1997,
      "durationInSeconds": 134
    },
    {
      "id": "0d5ebe8c-77fb-47f2-8281-55150f76ca07",
      "songName": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "artistName": "Amye Risbie",
      "numberOfStreams": 4144,
      "releaseYear": 1994,
      "durationInSeconds": 124
    },
    {
      "id": "68a659b5-bbe2-4e3e-9a9d-4070c0644bd2",
      "songName": "Fusce consequat.",
      "artistName": "Gustavo Rottenbury",
      "numberOfStreams": 1328,
      "releaseYear": 2007,
      "durationInSeconds": 95
    },
    {
      "id": "b71f9d66-4302-4c52-862d-ed383d6a0470",
      "songName": "Etiam faucibus cursus urna.",
      "artistName": "Erick Velez",
      "numberOfStreams": 2903,
      "releaseYear": 1997,
      "durationInSeconds": 279
    },
    {
      "id": "f0b18920-5fce-4319-bd56-5158d394ee16",
      "songName": "Integer non velit.",
      "artistName": "Aluin Start",
      "numberOfStreams": 2730,
      "releaseYear": 2004,
      "durationInSeconds": 297
    },
    {
      "id": "3281bdcc-7afd-4336-b56a-cd76f8733442",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Birdie Ducker",
      "numberOfStreams": 2096,
      "releaseYear": 1997,
      "durationInSeconds": 437
    },
    {
      "id": "5c16270e-94bb-4738-bb19-69627c92f97f",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Berthe Strangwood",
      "numberOfStreams": 1238,
      "releaseYear": 1999,
      "durationInSeconds": 140
    },
    {
      "id": "216ac980-91d1-4d00-b371-3cfb063623f2",
      "songName": "Etiam faucibus cursus urna.",
      "artistName": "Barbara Norcross",
      "numberOfStreams": 2848,
      "releaseYear": 2001,
      "durationInSeconds": 19
    },
    {
      "id": "9cfff7ce-a232-4591-9511-4a8168e72b86",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Darya Byron",
      "numberOfStreams": 253,
      "releaseYear": 2012,
      "durationInSeconds": 107
    },
    {
      "id": "471d078f-7699-4200-8176-821362b7c28b",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Ermengarde Hawtrey",
      "numberOfStreams": 3219,
      "releaseYear": 2003,
      "durationInSeconds": 208
    },
    {
      "id": "75f734f2-405c-4f9e-b734-74e8d22ac36a",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Emilia Carragher",
      "numberOfStreams": 2807,
      "releaseYear": 1989,
      "durationInSeconds": 199
    },
    {
      "id": "7b64e588-49f1-42da-9ebd-20842d02f18e",
      "songName": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "artistName": "Diane Viger",
      "numberOfStreams": 984,
      "releaseYear": 2012,
      "durationInSeconds": 168
    },
    {
      "id": "4ca165e5-c2c0-4b06-89e9-107a59fb2057",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Lebbie Bullier",
      "numberOfStreams": 2810,
      "releaseYear": 1995,
      "durationInSeconds": 279
    },
    {
      "id": "723c713f-0dd4-4066-98f4-8e930cd64cdf",
      "songName": "Nullam porttitor lacus at turpis.",
      "artistName": "Lilias Grunbaum",
      "numberOfStreams": 1488,
      "releaseYear": 2011,
      "durationInSeconds": 262
    },
    {
      "id": "a5017c6d-de8b-4be3-8cbf-c8d431d9d1b7",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Davina Asplen",
      "numberOfStreams": 1855,
      "releaseYear": 1993,
      "durationInSeconds": 14
    },
    {
      "id": "ee77ed9b-0344-4243-9649-1149be88cc20",
      "songName": "Morbi ut odio.",
      "artistName": "Joycelin Labbe",
      "numberOfStreams": 1238,
      "releaseYear": 2008,
      "durationInSeconds": 400
    },
    {
      "id": "39ecc86b-324f-4ce8-917e-7b76973805b5",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Ambrosio Peak",
      "numberOfStreams": 2996,
      "releaseYear": 2008,
      "durationInSeconds": 5
    },
    {
      "id": "249d770a-5df3-448c-bbe1-b5d82e0a8e57",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Gregorius Reith",
      "numberOfStreams": 2782,
      "releaseYear": 1992,
      "durationInSeconds": 247
    },
    {
      "id": "ee1ee3fe-d5bd-4500-b07c-12fcc9216f70",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Rachael Bogace",
      "numberOfStreams": 1297,
      "releaseYear": 1985,
      "durationInSeconds": 141
    },
    {
      "id": "32f9ea5a-e56a-41e1-954c-ac1c548a6c63",
      "songName": "Maecenas tincidunt lacus at velit.",
      "artistName": "Viviene Krysiak",
      "numberOfStreams": 3851,
      "releaseYear": 1986,
      "durationInSeconds": 93
    },
    {
      "id": "80a23cc8-66ea-47c7-8689-e94b8b2af79c",
      "songName": "Praesent lectus.",
      "artistName": "Alyda Asher",
      "numberOfStreams": 2185,
      "releaseYear": 2013,
      "durationInSeconds": 324
    },
    {
      "id": "1c554e50-c3a0-4f33-ae51-6ce41a67e252",
      "songName": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      "artistName": "Tim Cutmore",
      "numberOfStreams": 4731,
      "releaseYear": 1999,
      "durationInSeconds": 404
    },
    {
      "id": "780f4026-f65e-44a2-bf8d-8143dba39f32",
      "songName": "Nullam varius.",
      "artistName": "Noak Booler",
      "numberOfStreams": 1928,
      "releaseYear": 2003,
      "durationInSeconds": 232
    },
    {
      "id": "f8da871a-b6c3-4833-a0fd-0761cdb01bae",
      "songName": "Nulla tellus.",
      "artistName": "Fons Chesney",
      "numberOfStreams": 2313,
      "releaseYear": 2004,
      "durationInSeconds": 21
    },
    {
      "id": "068586d2-acd3-4c65-bd48-5be736080afe",
      "songName": "Integer ac leo.",
      "artistName": "Grissel Deverock",
      "numberOfStreams": 2033,
      "releaseYear": 1998,
      "durationInSeconds": 98
    },
    {
      "id": "214b3bb6-8264-4406-bc6b-290e3e2db3c8",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Brion Seary",
      "numberOfStreams": 822,
      "releaseYear": 1989,
      "durationInSeconds": 38
    },
    {
      "id": "4e1ca683-1a1a-4dd2-9621-658d51727439",
      "songName": "Duis bibendum.",
      "artistName": "Erena Yurtsev",
      "numberOfStreams": 1488,
      "releaseYear": 2008,
      "durationInSeconds": 239
    },
    {
      "id": "d0bdf0bf-a712-4569-90e3-3804c2753f2f",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      "artistName": "Alric Easbie",
      "numberOfStreams": 1892,
      "releaseYear": 1992,
      "durationInSeconds": 160
    },
    {
      "id": "61466848-28c9-4306-bf50-ebbef0528666",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Tandy Dankov",
      "numberOfStreams": 3249,
      "releaseYear": 1997,
      "durationInSeconds": 455
    },
    {
      "id": "ebe4c6aa-d132-42f8-9216-0c716e052e5c",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Rogers Itscovitz",
      "numberOfStreams": 1703,
      "releaseYear": 2005,
      "durationInSeconds": 494
    },
    {
      "id": "bf9fb671-398a-4efe-8944-67addcd77cf8",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Leeland Ghio",
      "numberOfStreams": 4195,
      "releaseYear": 2012,
      "durationInSeconds": 264
    },
    {
      "id": "577c18cd-33c0-46a4-9dbd-6046ecbc45c7",
      "songName": "Duis ac nibh.",
      "artistName": "Ozzie Haysham",
      "numberOfStreams": 4973,
      "releaseYear": 1988,
      "durationInSeconds": 167
    },
    {
      "id": "0c7dd021-3e9f-4adc-b1d5-0638ecbe36ef",
      "songName": "Vivamus tortor.",
      "artistName": "Davida Batram",
      "numberOfStreams": 4921,
      "releaseYear": 2008,
      "durationInSeconds": 388
    },
    {
      "id": "96e1e1cb-b4fb-4e3c-b67b-0f6ccb98380e",
      "songName": "Nullam varius.",
      "artistName": "Nydia Bassil",
      "numberOfStreams": 4778,
      "releaseYear": 1995,
      "durationInSeconds": 200
    },
    {
      "id": "a828b53e-d536-4254-9675-0a9eb1f6b32b",
      "songName": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "artistName": "Naomi Nassey",
      "numberOfStreams": 2360,
      "releaseYear": 1993,
      "durationInSeconds": 311
    },
    {
      "id": "c0e40392-7124-42b0-9d41-25f776c842f2",
      "songName": "Curabitur convallis.",
      "artistName": "Aube Ivanusyev",
      "numberOfStreams": 1716,
      "releaseYear": 2009,
      "durationInSeconds": 267
    },
    {
      "id": "e50859d8-4a0c-404e-9dc4-a0965a529773",
      "songName": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "artistName": "Jacinda Freddi",
      "numberOfStreams": 4470,
      "releaseYear": 1997,
      "durationInSeconds": 186
    },
    {
      "id": "b3306aa8-4d1f-452c-bb9c-35e11753d04e",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Emmett Bridgstock",
      "numberOfStreams": 3402,
      "releaseYear": 1994,
      "durationInSeconds": 364
    },
    {
      "id": "83a29bda-510c-4609-931c-ed60ef65293b",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Jorry Whitemarsh",
      "numberOfStreams": 3623,
      "releaseYear": 1988,
      "durationInSeconds": 262
    },
    {
      "id": "bf8ef1d1-294a-41a3-80e2-309fba4c6d46",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Aldis Shipway",
      "numberOfStreams": 1213,
      "releaseYear": 2010,
      "durationInSeconds": 255
    },
    {
      "id": "0205edb3-3f0f-408a-b9ce-fd0381f160d7",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Rhianna Matyushkin",
      "numberOfStreams": 1356,
      "releaseYear": 2003,
      "durationInSeconds": 231
    },
    {
      "id": "c5bfef05-cd30-417d-adef-ba3715c444d8",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Wallache D'Aguanno",
      "numberOfStreams": 2543,
      "releaseYear": 1985,
      "durationInSeconds": 472
    },
    {
      "id": "7f1e56ed-c2c3-47d9-9c60-968781bb78d9",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Burk Custance",
      "numberOfStreams": 3586,
      "releaseYear": 2004,
      "durationInSeconds": 441
    },
    {
      "id": "67a1b986-6824-4d6c-9339-da16f2a22025",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Alyssa Exall",
      "numberOfStreams": 2420,
      "releaseYear": 2008,
      "durationInSeconds": 34
    },
    {
      "id": "05f5a97c-ec31-4af2-bf78-c74df6b9d053",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Myrtie Barfield",
      "numberOfStreams": 1432,
      "releaseYear": 2005,
      "durationInSeconds": 315
    },
    {
      "id": "d7664726-f4c3-4f7a-be8d-5961ec8da778",
      "songName": "Maecenas rhoncus aliquam lacus.",
      "artistName": "Klemens Scallon",
      "numberOfStreams": 3306,
      "releaseYear": 2012,
      "durationInSeconds": 173
    },
    {
      "id": "9ee3c30a-275e-435b-b21a-1113805ec8cd",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Paulina Freeland",
      "numberOfStreams": 888,
      "releaseYear": 2007,
      "durationInSeconds": 289
    },
    {
      "id": "90e323a3-0ccf-4b60-bd20-3746e6eacb25",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Cordelie Oloshin",
      "numberOfStreams": 841,
      "releaseYear": 1988,
      "durationInSeconds": 153
    },
    {
      "id": "68877daa-bc05-4ad3-8947-3c68ec28fc95",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Quintus Liverock",
      "numberOfStreams": 828,
      "releaseYear": 2010,
      "durationInSeconds": 244
    },
    {
      "id": "e6bfb4d4-cac2-45ca-9b43-8d1092e5d818",
      "songName": "Etiam pretium iaculis justo.",
      "artistName": "Reinald Watton",
      "numberOfStreams": 132,
      "releaseYear": 2012,
      "durationInSeconds": 123
    },
    {
      "id": "d2aea460-42bc-4582-968f-c4e620866513",
      "songName": "Sed accumsan felis.",
      "artistName": "Tedman Twiggs",
      "numberOfStreams": 1554,
      "releaseYear": 2011,
      "durationInSeconds": 168
    },
    {
      "id": "02e2060c-393d-4eeb-ada4-bd381e196b86",
      "songName": "Donec dapibus.",
      "artistName": "Lavinia Exer",
      "numberOfStreams": 4686,
      "releaseYear": 1992,
      "durationInSeconds": 31
    },
    {
      "id": "4cd5b5e7-e4cf-42e5-9a4a-5bf0488d5aa8",
      "songName": "Praesent blandit.",
      "artistName": "Raynor Wimbush",
      "numberOfStreams": 1322,
      "releaseYear": 2007,
      "durationInSeconds": 179
    },
    {
      "id": "3971f15d-5689-41dc-85f8-37c3db4cfd9f",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Petra Garrould",
      "numberOfStreams": 3652,
      "releaseYear": 1999,
      "durationInSeconds": 81
    },
    {
      "id": "004f7657-4768-4106-9c35-d021e2efdceb",
      "songName": "Ut tellus.",
      "artistName": "Laural Fairall",
      "numberOfStreams": 1814,
      "releaseYear": 2006,
      "durationInSeconds": 196
    },
    {
      "id": "3b850981-1578-4434-9013-6993ba808ea3",
      "songName": "Duis ac nibh.",
      "artistName": "Melvin Ast",
      "numberOfStreams": 937,
      "releaseYear": 1998,
      "durationInSeconds": 382
    },
    {
      "id": "867458ee-d404-4fe0-984c-cf3d06fb24f5",
      "songName": "Quisque ut erat.",
      "artistName": "Levy Odhams",
      "numberOfStreams": 4412,
      "releaseYear": 2001,
      "durationInSeconds": 463
    },
    {
      "id": "fc95973a-bcc2-4bb0-83eb-fe1cace1e458",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Bendick Yeell",
      "numberOfStreams": 1664,
      "releaseYear": 2009,
      "durationInSeconds": 449
    },
    {
      "id": "49dd3ca9-09fc-4464-ba91-3181f8e211b5",
      "songName": "Maecenas tincidunt lacus at velit.",
      "artistName": "Vanya Cowely",
      "numberOfStreams": 2239,
      "releaseYear": 2002,
      "durationInSeconds": 202
    },
    {
      "id": "5405c9d8-d7ac-4fd1-9158-9d154d514c93",
      "songName": "Praesent lectus.",
      "artistName": "Gwen Lomax",
      "numberOfStreams": 4451,
      "releaseYear": 2010,
      "durationInSeconds": 411
    },
    {
      "id": "409aa3e5-295f-42b1-8d04-275584bcaeae",
      "songName": "Donec vitae nisi.",
      "artistName": "Ardeen Moubray",
      "numberOfStreams": 4754,
      "releaseYear": 1993,
      "durationInSeconds": 158
    },
    {
      "id": "24be4dbe-baa6-4c52-979f-2d0b1334ac7d",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Rodney Comber",
      "numberOfStreams": 3970,
      "releaseYear": 2003,
      "durationInSeconds": 400
    },
    {
      "id": "bb9979a3-1767-4422-b01f-b5ee1e23c6e8",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Reuven Gunny",
      "numberOfStreams": 767,
      "releaseYear": 2012,
      "durationInSeconds": 489
    },
    {
      "id": "33de9e68-3178-4baa-b13c-fbdd3c45d568",
      "songName": "Aenean fermentum.",
      "artistName": "Noby Gladhill",
      "numberOfStreams": 359,
      "releaseYear": 2000,
      "durationInSeconds": 20
    },
    {
      "id": "297b4ea0-3bf3-4336-b888-0fa1c9b5163b",
      "songName": "Integer ac leo.",
      "artistName": "Tedi Fransman",
      "numberOfStreams": 4698,
      "releaseYear": 2006,
      "durationInSeconds": 476
    },
    {
      "id": "11e71ad0-242d-44d7-85f3-aa6b94ad28f6",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Kinny Gaunter",
      "numberOfStreams": 1072,
      "releaseYear": 1971,
      "durationInSeconds": 272
    },
    {
      "id": "00573ee3-8ac9-4c30-b156-6f9345336ffd",
      "songName": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      "artistName": "Harcourt Cabrer",
      "numberOfStreams": 986,
      "releaseYear": 2006,
      "durationInSeconds": 32
    },
    {
      "id": "e8f9c741-dcbd-4864-b934-ad569517376b",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Tommie Bhar",
      "numberOfStreams": 1119,
      "releaseYear": 1997,
      "durationInSeconds": 450
    },
    {
      "id": "78cfe9fc-a760-47b6-9910-1d7ac774b80c",
      "songName": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "artistName": "Pier Aylin",
      "numberOfStreams": 2211,
      "releaseYear": 1969,
      "durationInSeconds": 108
    },
    {
      "id": "d83615b9-d31a-41c2-9345-df790a6e6505",
      "songName": "Pellentesque at nulla.",
      "artistName": "Dana Courtenay",
      "numberOfStreams": 567,
      "releaseYear": 1991,
      "durationInSeconds": 197
    },
    {
      "id": "a7fb475b-bf4f-4d23-b5fa-ed48347eb604",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Ryun MacDermid",
      "numberOfStreams": 751,
      "releaseYear": 1990,
      "durationInSeconds": 55
    },
    {
      "id": "1ed01b57-271c-4769-83e4-f25f4273d397",
      "songName": "Donec ut mauris eget massa tempor convallis.",
      "artistName": "Tootsie Capon",
      "numberOfStreams": 1164,
      "releaseYear": 2000,
      "durationInSeconds": 408
    },
    {
      "id": "f167a9eb-2a49-4a88-bc72-9e5bb81df047",
      "songName": "Praesent lectus.",
      "artistName": "Kimble Dingle",
      "numberOfStreams": 1760,
      "releaseYear": 2010,
      "durationInSeconds": 426
    },
    {
      "id": "202da7eb-31a7-4047-a1e2-9937a70f116b",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Kristyn Eldridge",
      "numberOfStreams": 3501,
      "releaseYear": 2004,
      "durationInSeconds": 405
    },
    {
      "id": "294d45cb-7b1e-48a7-9291-6095357e4b79",
      "songName": "Curabitur convallis.",
      "artistName": "Arri Dellatorre",
      "numberOfStreams": 3870,
      "releaseYear": 1988,
      "durationInSeconds": 223
    },
    {
      "id": "7d662120-c9fb-4800-b4a5-ba4425d766c7",
      "songName": "Duis ac nibh.",
      "artistName": "Jamal Capelin",
      "numberOfStreams": 343,
      "releaseYear": 2011,
      "durationInSeconds": 126
    },
    {
      "id": "e4ec34ee-f4f1-4c63-8b6b-a53af3114dd6",
      "songName": "Nulla tempus.",
      "artistName": "Merline Dowsing",
      "numberOfStreams": 2052,
      "releaseYear": 2011,
      "durationInSeconds": 67
    },
    {
      "id": "873bc502-b6cf-431f-aece-be445d89d61a",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Ingrim Jenoure",
      "numberOfStreams": 1119,
      "releaseYear": 2012,
      "durationInSeconds": 377
    },
    {
      "id": "ab20ead5-a4b6-4686-a40a-ead3ef551bb0",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Karolina Caudell",
      "numberOfStreams": 4406,
      "releaseYear": 2004,
      "durationInSeconds": 186
    },
    {
      "id": "26b2d753-62b6-420b-988e-78cfcc39a166",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Renato Simpole",
      "numberOfStreams": 4603,
      "releaseYear": 2009,
      "durationInSeconds": 256
    },
    {
      "id": "7473cab4-78af-4af7-8382-0f1d0b8a48a7",
      "songName": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "artistName": "Pavla Chartman",
      "numberOfStreams": 1993,
      "releaseYear": 1996,
      "durationInSeconds": 304
    },
    {
      "id": "e9c5bf52-4f5f-4d6f-88c2-bae665e91128",
      "songName": "Donec vitae nisi.",
      "artistName": "Florette Dyhouse",
      "numberOfStreams": 4074,
      "releaseYear": 1997,
      "durationInSeconds": 254
    },
    {
      "id": "77dcfea7-3108-46b2-a973-8caeb18bc324",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Abel Bleas",
      "numberOfStreams": 3646,
      "releaseYear": 1995,
      "durationInSeconds": 345
    },
    {
      "id": "a4693e0c-1392-4c81-a516-fceea28dc40a",
      "songName": "Nulla ut erat id mauris vulputate elementum.",
      "artistName": "Evered Burdikin",
      "numberOfStreams": 2649,
      "releaseYear": 1986,
      "durationInSeconds": 176
    },
    {
      "id": "2d7c4ca3-ef43-4174-8599-8a2ba20d1516",
      "songName": "Integer a nibh.",
      "artistName": "Alix Haylock",
      "numberOfStreams": 1520,
      "releaseYear": 2004,
      "durationInSeconds": 158
    },
    {
      "id": "a5a118f2-e3ec-4ceb-9642-526e3bac03bf",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Karie Flatt",
      "numberOfStreams": 1259,
      "releaseYear": 2008,
      "durationInSeconds": 242
    },
    {
      "id": "85049d61-1df8-4bc0-83fb-cba5b90cf4ea",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Ruddie Gumme",
      "numberOfStreams": 1586,
      "releaseYear": 1999,
      "durationInSeconds": 327
    },
    {
      "id": "32b5ab35-2d07-458e-adb1-38605c7bcb02",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Fair Allender",
      "numberOfStreams": 817,
      "releaseYear": 2005,
      "durationInSeconds": 337
    },
    {
      "id": "37f51ea9-8caa-4ae2-a53e-cd747ed4f948",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Reena Jakucewicz",
      "numberOfStreams": 4340,
      "releaseYear": 2012,
      "durationInSeconds": 36
    },
    {
      "id": "5f680185-76cf-430c-b266-494e0cc1685c",
      "songName": "Aenean auctor gravida sem.",
      "artistName": "Powell Gavriel",
      "numberOfStreams": 1183,
      "releaseYear": 2005,
      "durationInSeconds": 125
    },
    {
      "id": "5025f062-46ec-4659-beb1-7d942557801b",
      "songName": "Sed sagittis.",
      "artistName": "Donall Doey",
      "numberOfStreams": 2452,
      "releaseYear": 1992,
      "durationInSeconds": 18
    },
    {
      "id": "40577423-0f42-476d-aa30-a235393b9475",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Maridel Reyson",
      "numberOfStreams": 503,
      "releaseYear": 2006,
      "durationInSeconds": 58
    },
    {
      "id": "db0e3363-f875-4ad9-83a6-39999424da18",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Adiana Dukesbury",
      "numberOfStreams": 3815,
      "releaseYear": 2002,
      "durationInSeconds": 127
    },
    {
      "id": "b36c6443-ddac-439a-afa1-b55c27e9d319",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Lockwood Alwen",
      "numberOfStreams": 365,
      "releaseYear": 2008,
      "durationInSeconds": 42
    },
    {
      "id": "0d943c24-c1a6-481a-a9d9-fcaa0837a071",
      "songName": "Aliquam quis turpis eget elit sodales scelerisque.",
      "artistName": "Rachel Sanchiz",
      "numberOfStreams": 2407,
      "releaseYear": 1987,
      "durationInSeconds": 125
    },
    {
      "id": "fdf00511-f3c2-4133-9e47-4d14ce82831f",
      "songName": "Quisque id justo sit amet sapien dignissim vestibulum.",
      "artistName": "Lorilee de Mullett",
      "numberOfStreams": 4577,
      "releaseYear": 2012,
      "durationInSeconds": 230
    },
    {
      "id": "70cd200f-d13d-406a-bc75-56f9baa111b3",
      "songName": "In quis justo.",
      "artistName": "Nat Lindley",
      "numberOfStreams": 2559,
      "releaseYear": 2004,
      "durationInSeconds": 101
    },
    {
      "id": "4165ecf3-2482-4ed7-a133-d80b45bb7129",
      "songName": "Pellentesque ultrices mattis odio.",
      "artistName": "Gunar O'Hickey",
      "numberOfStreams": 1741,
      "releaseYear": 1993,
      "durationInSeconds": 212
    },
    {
      "id": "afac7926-eed9-4822-afc7-525958b179fb",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Sherline Brilon",
      "numberOfStreams": 4876,
      "releaseYear": 1996,
      "durationInSeconds": 13
    },
    {
      "id": "3f558ab5-994e-4c8e-b484-6f4253800bd6",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Westbrooke Sotheron",
      "numberOfStreams": 3704,
      "releaseYear": 2011,
      "durationInSeconds": 390
    },
    {
      "id": "2b614044-6a7f-41c4-a195-342394a24415",
      "songName": "Sed accumsan felis.",
      "artistName": "Gustavus Maria",
      "numberOfStreams": 682,
      "releaseYear": 2005,
      "durationInSeconds": 187
    },
    {
      "id": "7ce447ad-26c3-4e9e-a708-619467fdd7c2",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Vladamir Lingard",
      "numberOfStreams": 2809,
      "releaseYear": 2009,
      "durationInSeconds": 354
    },
    {
      "id": "d42eae6e-c7fe-4088-ad32-2988dc8ac849",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Anastassia Finder",
      "numberOfStreams": 1989,
      "releaseYear": 1978,
      "durationInSeconds": 15
    },
    {
      "id": "3b59a37e-ee77-4261-b6ec-342d36e56f1a",
      "songName": "Pellentesque at nulla.",
      "artistName": "Taryn Dugood",
      "numberOfStreams": 1964,
      "releaseYear": 2003,
      "durationInSeconds": 174
    },
    {
      "id": "77530fcf-91de-4aae-9a33-00fea2b53aae",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Arlette Filinkov",
      "numberOfStreams": 2055,
      "releaseYear": 2010,
      "durationInSeconds": 308
    },
    {
      "id": "62679faa-7e15-475f-860f-e492c0b95a48",
      "songName": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      "artistName": "Marilee Kiezler",
      "numberOfStreams": 4719,
      "releaseYear": 2008,
      "durationInSeconds": 319
    },
    {
      "id": "7bcfcdb2-8180-4c22-8779-d7c602a1fd91",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Barthel Coils",
      "numberOfStreams": 3200,
      "releaseYear": 2012,
      "durationInSeconds": 331
    },
    {
      "id": "de18a103-3ae9-4bf0-986d-00fe8100a300",
      "songName": "Nulla tempus.",
      "artistName": "Brendon Hynson",
      "numberOfStreams": 1287,
      "releaseYear": 1992,
      "durationInSeconds": 296
    },
    {
      "id": "9a700164-13e2-4ef1-97c7-8547566f76b0",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Adrienne Grigs",
      "numberOfStreams": 3658,
      "releaseYear": 2004,
      "durationInSeconds": 87
    },
    {
      "id": "119b8662-39b3-44a0-b3b0-ffa666ec7d17",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Kelvin Kay",
      "numberOfStreams": 4607,
      "releaseYear": 2006,
      "durationInSeconds": 116
    },
    {
      "id": "0ede2fb0-31da-4f69-8a53-de8e20f330de",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Celene Minnock",
      "numberOfStreams": 878,
      "releaseYear": 1987,
      "durationInSeconds": 387
    },
    {
      "id": "91ac7860-dd14-45d7-9067-f8d00558f9d7",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Henrik Noore",
      "numberOfStreams": 1322,
      "releaseYear": 2000,
      "durationInSeconds": 152
    },
    {
      "id": "cf0a6454-218a-4a88-82f3-402f1dff36c4",
      "songName": "Mauris lacinia sapien quis libero.",
      "artistName": "Morten Firsby",
      "numberOfStreams": 4805,
      "releaseYear": 1998,
      "durationInSeconds": 138
    },
    {
      "id": "1d116832-0a6b-4a17-a17c-21acece07b99",
      "songName": "Quisque id justo sit amet sapien dignissim vestibulum.",
      "artistName": "Monro Fountian",
      "numberOfStreams": 1730,
      "releaseYear": 2009,
      "durationInSeconds": 207
    },
    {
      "id": "be4ee9d4-dc37-4195-84e6-7d5712574bd3",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Samuele Swindley",
      "numberOfStreams": 3629,
      "releaseYear": 2004,
      "durationInSeconds": 465
    },
    {
      "id": "6312893d-9be7-4d13-bfa6-0b9ab68b75ed",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Vaughan Stapleford",
      "numberOfStreams": 4634,
      "releaseYear": 2004,
      "durationInSeconds": 128
    },
    {
      "id": "319bd745-2137-415b-84c7-a637bb5ee640",
      "songName": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "artistName": "Keary Bruneau",
      "numberOfStreams": 3325,
      "releaseYear": 2005,
      "durationInSeconds": 161
    },
    {
      "id": "5e262934-5043-4534-a377-65bae96b24af",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Sloan Rimes",
      "numberOfStreams": 1529,
      "releaseYear": 1992,
      "durationInSeconds": 42
    },
    {
      "id": "c96dbc96-bab2-400d-8eea-51d89914d91c",
      "songName": "Maecenas tincidunt lacus at velit.",
      "artistName": "Estevan Ciciari",
      "numberOfStreams": 1466,
      "releaseYear": 1993,
      "durationInSeconds": 285
    },
    {
      "id": "195762f9-ee6f-445c-9b0a-7c911e4460c4",
      "songName": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      "artistName": "Corinna Cowterd",
      "numberOfStreams": 2999,
      "releaseYear": 2007,
      "durationInSeconds": 211
    },
    {
      "id": "95b6a692-0159-4bea-8751-8b048b1e5845",
      "songName": "Donec vitae nisi.",
      "artistName": "Vidovic Syddall",
      "numberOfStreams": 3221,
      "releaseYear": 2012,
      "durationInSeconds": 425
    },
    {
      "id": "b18ef9d5-b314-4a8f-8259-bb1c3add1dd2",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Corbet McMackin",
      "numberOfStreams": 1025,
      "releaseYear": 1993,
      "durationInSeconds": 156
    },
    {
      "id": "4bbd3f8d-9413-4744-89b9-b63de21987f7",
      "songName": "Pellentesque viverra pede ac diam.",
      "artistName": "Ivory Tonbridge",
      "numberOfStreams": 4750,
      "releaseYear": 1990,
      "durationInSeconds": 368
    },
    {
      "id": "b9f410e1-fd3c-4efe-a7d0-c5724709ca1c",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Laurice Gofton",
      "numberOfStreams": 1907,
      "releaseYear": 2001,
      "durationInSeconds": 431
    },
    {
      "id": "67f6a6a2-a824-4ad0-a5c0-5b42e00c232b",
      "songName": "Curabitur convallis.",
      "artistName": "Penelope Bartkiewicz",
      "numberOfStreams": 2632,
      "releaseYear": 2004,
      "durationInSeconds": 443
    },
    {
      "id": "4df59a0d-043a-47c0-9907-70ecf7cfd2a1",
      "songName": "Suspendisse ornare consequat lectus.",
      "artistName": "Rosana Skylett",
      "numberOfStreams": 2401,
      "releaseYear": 1989,
      "durationInSeconds": 152
    },
    {
      "id": "b8503b73-602a-4c84-9f17-ad309988141f",
      "songName": "Nam nulla.",
      "artistName": "Alexa Scimone",
      "numberOfStreams": 3133,
      "releaseYear": 2007,
      "durationInSeconds": 226
    },
    {
      "id": "871e4642-fa60-422a-9c49-439a1f4c1418",
      "songName": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "artistName": "Basil Kalisz",
      "numberOfStreams": 1817,
      "releaseYear": 1999,
      "durationInSeconds": 101
    },
    {
      "id": "ab072a39-94e3-4dc3-afd0-d6e7de6ca85c",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Denni Havock",
      "numberOfStreams": 2475,
      "releaseYear": 2011,
      "durationInSeconds": 421
    },
    {
      "id": "9ec87903-7819-42da-8dad-d704f3f64234",
      "songName": "Aliquam non mauris.",
      "artistName": "Vida Foley",
      "numberOfStreams": 2433,
      "releaseYear": 2006,
      "durationInSeconds": 168
    },
    {
      "id": "a825f1c4-606b-4225-a6cc-229a2f782180",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Zandra Morrant",
      "numberOfStreams": 4668,
      "releaseYear": 1996,
      "durationInSeconds": 131
    },
    {
      "id": "321d5077-ddb1-4f0c-bcd3-c3c8a444cd3a",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Nickey Vosse",
      "numberOfStreams": 328,
      "releaseYear": 2009,
      "durationInSeconds": 246
    },
    {
      "id": "69119d77-31a3-4da4-850f-c4a1b5cb1a8c",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Keith Pavlasek",
      "numberOfStreams": 816,
      "releaseYear": 1995,
      "durationInSeconds": 324
    },
    {
      "id": "f2627245-b0c8-4fcc-9622-3036fa5100bc",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Ashlin Curdell",
      "numberOfStreams": 4683,
      "releaseYear": 2008,
      "durationInSeconds": 166
    },
    {
      "id": "2da24941-5b4b-43ea-95d6-3da439b5b683",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Liana Dumphy",
      "numberOfStreams": 3405,
      "releaseYear": 1987,
      "durationInSeconds": 201
    },
    {
      "id": "4f178fdf-2ef7-43b8-878d-b5f150f04851",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Delores Mowett",
      "numberOfStreams": 2170,
      "releaseYear": 2011,
      "durationInSeconds": 124
    },
    {
      "id": "00065461-48aa-4f34-acdc-19f5f065cc91",
      "songName": "Cras pellentesque volutpat dui.",
      "artistName": "Christa Astupenas",
      "numberOfStreams": 4613,
      "releaseYear": 1987,
      "durationInSeconds": 289
    },
    {
      "id": "d28ee3ca-7be3-4cd2-add3-40582e081043",
      "songName": "Sed ante.",
      "artistName": "Clevey Donizeau",
      "numberOfStreams": 384,
      "releaseYear": 1999,
      "durationInSeconds": 211
    },
    {
      "id": "587d8685-9288-46b2-8045-4fd455603eba",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Richmond Canedo",
      "numberOfStreams": 4089,
      "releaseYear": 1997,
      "durationInSeconds": 4
    },
    {
      "id": "0a1adeb8-85b0-4689-a3ca-ecabc4fdce04",
      "songName": "Nulla tempus.",
      "artistName": "Putnem MacIlraith",
      "numberOfStreams": 1623,
      "releaseYear": 2008,
      "durationInSeconds": 28
    },
    {
      "id": "a069d99e-a95e-4bef-adcf-c24bd574525c",
      "songName": "In blandit ultrices enim.",
      "artistName": "Alta Rakes",
      "numberOfStreams": 4956,
      "releaseYear": 1989,
      "durationInSeconds": 275
    },
    {
      "id": "2f611aa6-263e-40d0-8b1b-77f5a3dd073a",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Albie Dorset",
      "numberOfStreams": 1256,
      "releaseYear": 1995,
      "durationInSeconds": 426
    },
    {
      "id": "0605b2f8-a97a-44ea-a5ca-5263d5fc523d",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Yolane Denzilow",
      "numberOfStreams": 2596,
      "releaseYear": 2007,
      "durationInSeconds": 200
    },
    {
      "id": "29eed049-2be1-41f8-a621-3f2b16f9f7c1",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Seth Zylbermann",
      "numberOfStreams": 3624,
      "releaseYear": 2006,
      "durationInSeconds": 358
    },
    {
      "id": "5b91e23a-66ea-4ae5-927a-0334f6e5d186",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Carina April",
      "numberOfStreams": 2622,
      "releaseYear": 1999,
      "durationInSeconds": 1
    },
    {
      "id": "f7414dfe-b91a-4a09-a38a-a1679cf19673",
      "songName": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
      "artistName": "Jodi Schanke",
      "numberOfStreams": 4467,
      "releaseYear": 2011,
      "durationInSeconds": 127
    },
    {
      "id": "dd34bdff-2a76-4805-a456-b869ddff4599",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "artistName": "Valdemar Yurkevich",
      "numberOfStreams": 4946,
      "releaseYear": 2010,
      "durationInSeconds": 161
    },
    {
      "id": "7ac43261-e363-4a40-b837-5e0de3cb0ba1",
      "songName": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "artistName": "Caterina Hunnisett",
      "numberOfStreams": 278,
      "releaseYear": 2008,
      "durationInSeconds": 277
    },
    {
      "id": "bacf64cc-08f0-4c0c-beea-b6afc11d9ada",
      "songName": "Aenean sit amet justo.",
      "artistName": "Thaddus Aldridge",
      "numberOfStreams": 1674,
      "releaseYear": 2005,
      "durationInSeconds": 333
    },
    {
      "id": "133b478c-1d62-41cc-8b30-0fa70f1f18ab",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Clem Jacke",
      "numberOfStreams": 1316,
      "releaseYear": 2006,
      "durationInSeconds": 121
    },
    {
      "id": "23f070b5-ad97-499b-9b45-ed6bb385e075",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Jakie Wrey",
      "numberOfStreams": 1248,
      "releaseYear": 2002,
      "durationInSeconds": 350
    },
    {
      "id": "797005c1-14b0-4526-83ff-c1204f30ba65",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Brucie Danielut",
      "numberOfStreams": 1947,
      "releaseYear": 2001,
      "durationInSeconds": 95
    },
    {
      "id": "5e290577-97dc-414e-b7f5-29e284f55603",
      "songName": "Cras non velit nec nisi vulputate nonummy.",
      "artistName": "Helenelizabeth Player",
      "numberOfStreams": 754,
      "releaseYear": 2011,
      "durationInSeconds": 215
    },
    {
      "id": "e6751c78-582b-4828-ac36-37a28ed2aa82",
      "songName": "Nunc rhoncus dui vel sem.",
      "artistName": "Ive Scoffins",
      "numberOfStreams": 1069,
      "releaseYear": 2005,
      "durationInSeconds": 7
    },
    {
      "id": "2fba86b7-dda9-4ef7-8899-8c576e895f6e",
      "songName": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      "artistName": "Shayne Segge",
      "numberOfStreams": 1384,
      "releaseYear": 1984,
      "durationInSeconds": 17
    },
    {
      "id": "2d2dc625-6949-4960-8731-392b9f2e5583",
      "songName": "Phasellus id sapien in sapien iaculis congue.",
      "artistName": "Clement Silverstone",
      "numberOfStreams": 2125,
      "releaseYear": 2006,
      "durationInSeconds": 307
    },
    {
      "id": "00c77cd9-e990-4eeb-bdb1-279fb988a7b4",
      "songName": "Integer non velit.",
      "artistName": "Georgi Edgell",
      "numberOfStreams": 1378,
      "releaseYear": 2002,
      "durationInSeconds": 222
    },
    {
      "id": "a5774bf4-79c4-4466-a532-dbeae14a1dc1",
      "songName": "Donec posuere metus vitae ipsum.",
      "artistName": "Hettie Jeenes",
      "numberOfStreams": 22,
      "releaseYear": 1995,
      "durationInSeconds": 376
    },
    {
      "id": "1c2462c5-f438-4a6f-b795-a0aa74a81ec1",
      "songName": "Integer non velit.",
      "artistName": "Kennett Wagge",
      "numberOfStreams": 1314,
      "releaseYear": 1996,
      "durationInSeconds": 79
    },
    {
      "id": "036e6cb6-da4a-45c5-a8be-a490170303da",
      "songName": "Duis mattis egestas metus.",
      "artistName": "Marketa Ianilli",
      "numberOfStreams": 2009,
      "releaseYear": 2006,
      "durationInSeconds": 66
    },
    {
      "id": "bcbcde22-f89f-4a6d-821e-d49b473bd08f",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Angelico Hammerman",
      "numberOfStreams": 3595,
      "releaseYear": 1999,
      "durationInSeconds": 366
    },
    {
      "id": "21d11f8b-d39b-4de8-b9ab-9dccbcb3dd98",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Denys McKane",
      "numberOfStreams": 3824,
      "releaseYear": 1997,
      "durationInSeconds": 301
    },
    {
      "id": "b9d70e93-dce4-49d6-810c-171a63152303",
      "songName": "Donec semper sapien a libero.",
      "artistName": "Maribelle Abbati",
      "numberOfStreams": 4458,
      "releaseYear": 2002,
      "durationInSeconds": 73
    },
    {
      "id": "12ab13f0-7a2c-478f-8618-de4de405e6da",
      "songName": "Duis ac nibh.",
      "artistName": "Chere Litherborough",
      "numberOfStreams": 4456,
      "releaseYear": 2009,
      "durationInSeconds": 87
    },
    {
      "id": "9a973181-df81-4cd3-b59e-3156db3cb7b4",
      "songName": "Nulla ac enim.",
      "artistName": "Lynne Lissandrini",
      "numberOfStreams": 2427,
      "releaseYear": 1987,
      "durationInSeconds": 350
    },
    {
      "id": "cf259871-e0c0-47b6-b16a-7b9884ec93ba",
      "songName": "Suspendisse potenti.",
      "artistName": "Amii Qusklay",
      "numberOfStreams": 1697,
      "releaseYear": 2000,
      "durationInSeconds": 176
    },
    {
      "id": "b377f9ae-3061-4347-b778-14c10d4c0f12",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      "artistName": "Maribelle Kaszper",
      "numberOfStreams": 3203,
      "releaseYear": 1986,
      "durationInSeconds": 327
    },
    {
      "id": "6bfa494f-21ce-4572-9cbd-0bd8d6788d2d",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Clem Chastelain",
      "numberOfStreams": 4925,
      "releaseYear": 1992,
      "durationInSeconds": 292
    },
    {
      "id": "6ecea5ae-a54b-44c6-bd2e-0b13b2e380d3",
      "songName": "Donec quis orci eget orci vehicula condimentum.",
      "artistName": "Sibeal Goldbourn",
      "numberOfStreams": 3093,
      "releaseYear": 1998,
      "durationInSeconds": 211
    },
    {
      "id": "41046886-36f1-44b8-b90e-50a27124c081",
      "songName": "Nulla facilisi.",
      "artistName": "Licha Langan",
      "numberOfStreams": 2831,
      "releaseYear": 2005,
      "durationInSeconds": 22
    },
    {
      "id": "20d77194-dfa6-49a4-a723-429a44679b18",
      "songName": "Fusce posuere felis sed lacus.",
      "artistName": "Georg Olding",
      "numberOfStreams": 1855,
      "releaseYear": 1948,
      "durationInSeconds": 403
    },
    {
      "id": "f46e2917-03f1-446a-b3a1-e5b3c4b2c6c1",
      "songName": "Nulla tellus.",
      "artistName": "Maximilian Surgison",
      "numberOfStreams": 4323,
      "releaseYear": 2008,
      "durationInSeconds": 311
    },
    {
      "id": "555af5bf-a1dc-4262-84af-018e586c780b",
      "songName": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      "artistName": "Mace Wenman",
      "numberOfStreams": 3483,
      "releaseYear": 1989,
      "durationInSeconds": 194
    },
    {
      "id": "ad6efc8f-b65e-44fc-92a5-6f974af06c7e",
      "songName": "Phasellus in felis.",
      "artistName": "Cloe Rigbye",
      "numberOfStreams": 3683,
      "releaseYear": 1992,
      "durationInSeconds": 194
    },
    {
      "id": "7e6940af-c9f7-4228-926d-8d1cb97d1fb7",
      "songName": "Nulla suscipit ligula in lacus.",
      "artistName": "Haley Philbin",
      "numberOfStreams": 361,
      "releaseYear": 2002,
      "durationInSeconds": 406
    },
    {
      "id": "dd5eb0e0-ec72-4798-a8e0-e47f5a794885",
      "songName": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "artistName": "Nataniel Crowden",
      "numberOfStreams": 4306,
      "releaseYear": 2005,
      "durationInSeconds": 339
    },
    {
      "id": "f239bfea-42ca-4ef0-a6bf-b5a99129bee9",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Shina Budgett",
      "numberOfStreams": 1330,
      "releaseYear": 2000,
      "durationInSeconds": 346
    },
    {
      "id": "bd6b9e69-bbf3-4a2b-bfe6-20b3aa8101c9",
      "songName": "Morbi ut odio.",
      "artistName": "Rutter O'Hare",
      "numberOfStreams": 1937,
      "releaseYear": 2011,
      "durationInSeconds": 270
    },
    {
      "id": "81749e9f-9626-4667-88da-c7d82e853aec",
      "songName": "Integer non velit.",
      "artistName": "Maribeth McTiernan",
      "numberOfStreams": 945,
      "releaseYear": 2010,
      "durationInSeconds": 42
    },
    {
      "id": "7202e06e-e755-4bf4-b83c-efd45939b3a6",
      "songName": "Fusce consequat.",
      "artistName": "Carling Lies",
      "numberOfStreams": 1485,
      "releaseYear": 2007,
      "durationInSeconds": 89
    },
    {
      "id": "df713901-aec0-40dc-b0c8-a5293b5782fe",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Eward Formie",
      "numberOfStreams": 1613,
      "releaseYear": 1992,
      "durationInSeconds": 72
    },
    {
      "id": "f6441a40-f41a-463b-a411-bd4175cb3ea9",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Fayina Voaden",
      "numberOfStreams": 2473,
      "releaseYear": 2002,
      "durationInSeconds": 240
    },
    {
      "id": "4a7da479-350b-47d0-b2ae-b38f17089099",
      "songName": "In congue.",
      "artistName": "Chauncey Janic",
      "numberOfStreams": 1058,
      "releaseYear": 2009,
      "durationInSeconds": 385
    },
    {
      "id": "ce8765e6-5879-49a7-be38-5eca0d5fb5bc",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Codie Roycroft",
      "numberOfStreams": 846,
      "releaseYear": 2007,
      "durationInSeconds": 103
    },
    {
      "id": "53c862b2-d1c0-4739-acd9-93c146b35729",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Emlyn Petzold",
      "numberOfStreams": 2587,
      "releaseYear": 2010,
      "durationInSeconds": 179
    },
    {
      "id": "97547074-e67a-4825-9891-8594168af0cc",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Dacey Mellows",
      "numberOfStreams": 1672,
      "releaseYear": 2006,
      "durationInSeconds": 170
    },
    {
      "id": "7d287da7-1b63-46ed-9d2d-57609b8d9a21",
      "songName": "Nulla tempus.",
      "artistName": "Barth Marklund",
      "numberOfStreams": 3625,
      "releaseYear": 2011,
      "durationInSeconds": 417
    },
    {
      "id": "8482f998-93eb-47a8-93f8-2ccafa659a88",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Kelbee Chese",
      "numberOfStreams": 657,
      "releaseYear": 2010,
      "durationInSeconds": 124
    },
    {
      "id": "17777cb7-0e43-4476-ba19-729a3c25bb4c",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Nat Sawl",
      "numberOfStreams": 3013,
      "releaseYear": 2007,
      "durationInSeconds": 337
    },
    {
      "id": "5f886cbc-9c5f-41d4-9adc-24fca7b2dff0",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Lewie Pinxton",
      "numberOfStreams": 3210,
      "releaseYear": 2012,
      "durationInSeconds": 432
    },
    {
      "id": "48800abb-b91a-4c8e-86b4-e21c2a3f0eb0",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Dougy Caso",
      "numberOfStreams": 465,
      "releaseYear": 1992,
      "durationInSeconds": 1
    },
    {
      "id": "79a390ff-041a-4cb9-a01a-69ff6c6d6e3e",
      "songName": "Suspendisse potenti.",
      "artistName": "Stormie Tomaskov",
      "numberOfStreams": 717,
      "releaseYear": 2008,
      "durationInSeconds": 198
    },
    {
      "id": "0af7842b-7894-4b2e-8743-6893aa677e6a",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Savina Fosken",
      "numberOfStreams": 4232,
      "releaseYear": 1999,
      "durationInSeconds": 434
    },
    {
      "id": "161c0f65-8f0b-4ab8-bb8a-e9c7b123a4f6",
      "songName": "Morbi ut odio.",
      "artistName": "Anjanette Cobbing",
      "numberOfStreams": 367,
      "releaseYear": 2002,
      "durationInSeconds": 376
    },
    {
      "id": "84c49d7f-1f1e-47c1-a5bc-86b4f5b79849",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Kessia Lafferty",
      "numberOfStreams": 2155,
      "releaseYear": 1992,
      "durationInSeconds": 289
    },
    {
      "id": "22cc8bfe-c6d5-4c1b-854d-8cbe18c13c26",
      "songName": "In eleifend quam a odio.",
      "artistName": "Mal Herity",
      "numberOfStreams": 980,
      "releaseYear": 1969,
      "durationInSeconds": 406
    },
    {
      "id": "8b65fa60-bc96-4425-8d69-042e079fedd8",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Corilla Sculley",
      "numberOfStreams": 2718,
      "releaseYear": 1993,
      "durationInSeconds": 276
    },
    {
      "id": "3a2ca455-a3e7-4d6d-9769-aa81edcdcb68",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Esdras Hestrop",
      "numberOfStreams": 4833,
      "releaseYear": 2004,
      "durationInSeconds": 252
    },
    {
      "id": "5e23312d-0257-4f91-83eb-f706686fed02",
      "songName": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "artistName": "Elenore Verissimo",
      "numberOfStreams": 4864,
      "releaseYear": 1995,
      "durationInSeconds": 110
    },
    {
      "id": "95c3864a-7db1-48ad-abb3-17336284af9e",
      "songName": "In quis justo.",
      "artistName": "Channa Boddice",
      "numberOfStreams": 1781,
      "releaseYear": 1998,
      "durationInSeconds": 325
    },
    {
      "id": "ddfc6e4e-646c-4174-bd61-5bff38f7d4a7",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Grenville Morican",
      "numberOfStreams": 3292,
      "releaseYear": 1991,
      "durationInSeconds": 328
    },
    {
      "id": "b1d1dcf6-e278-406f-bf81-c9273899c08e",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Gilli O'Heaney",
      "numberOfStreams": 930,
      "releaseYear": 1967,
      "durationInSeconds": 255
    },
    {
      "id": "9601d99d-d05c-4cae-b096-32a853b7a403",
      "songName": "Morbi non lectus.",
      "artistName": "Willow Olijve",
      "numberOfStreams": 834,
      "releaseYear": 2004,
      "durationInSeconds": 223
    },
    {
      "id": "8c44a6b3-05ff-47f7-8bc5-ff5ba43810ae",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Carling Byron",
      "numberOfStreams": 879,
      "releaseYear": 1997,
      "durationInSeconds": 86
    },
    {
      "id": "0031997c-1220-4b9e-8a6b-9f620e43819f",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Hebert Arnaudon",
      "numberOfStreams": 4071,
      "releaseYear": 2000,
      "durationInSeconds": 118
    },
    {
      "id": "9dafc2d5-e365-4f60-b92f-532c944d599f",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Wadsworth Bendin",
      "numberOfStreams": 2376,
      "releaseYear": 2002,
      "durationInSeconds": 271
    },
    {
      "id": "084fadf6-504c-48b2-aa91-108fb9b84156",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Sindee Pavie",
      "numberOfStreams": 3033,
      "releaseYear": 1991,
      "durationInSeconds": 113
    },
    {
      "id": "eb02f1ac-e082-428d-b8fd-29f0dc628db0",
      "songName": "Nullam varius.",
      "artistName": "Genny Gronauer",
      "numberOfStreams": 365,
      "releaseYear": 2010,
      "durationInSeconds": 450
    },
    {
      "id": "108882b2-5cd7-49b1-a436-245c2fe1962e",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Kirbee Nardi",
      "numberOfStreams": 3024,
      "releaseYear": 2006,
      "durationInSeconds": 486
    },
    {
      "id": "2d7d1e90-29e9-4189-b91c-f56dfcca93da",
      "songName": "Aenean lectus.",
      "artistName": "Salome Plaistowe",
      "numberOfStreams": 340,
      "releaseYear": 2006,
      "durationInSeconds": 150
    },
    {
      "id": "9ba9618b-6097-4075-81d9-ffb97b0d3151",
      "songName": "Curabitur convallis.",
      "artistName": "Maje Frede",
      "numberOfStreams": 4868,
      "releaseYear": 1997,
      "durationInSeconds": 441
    },
    {
      "id": "0feaa6c2-c86d-44c5-822e-97f8ef264528",
      "songName": "Aenean fermentum.",
      "artistName": "Danny Sperring",
      "numberOfStreams": 245,
      "releaseYear": 2012,
      "durationInSeconds": 343
    },
    {
      "id": "abfac33e-e212-45d1-8ed7-d816598002e7",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Kent Easun",
      "numberOfStreams": 2153,
      "releaseYear": 1997,
      "durationInSeconds": 385
    },
    {
      "id": "9f6254d3-1b72-4b85-945e-d3d7f1a0831a",
      "songName": "Suspendisse potenti.",
      "artistName": "Jesus Dumingo",
      "numberOfStreams": 4360,
      "releaseYear": 2001,
      "durationInSeconds": 85
    },
    {
      "id": "8d265766-ed76-4348-bf35-24730e23db68",
      "songName": "Proin at turpis a pede posuere nonummy.",
      "artistName": "Tomi De Pietri",
      "numberOfStreams": 3990,
      "releaseYear": 2004,
      "durationInSeconds": 60
    },
    {
      "id": "0ca8004a-695e-4c23-ae6b-ed497ed08c71",
      "songName": "Nulla justo.",
      "artistName": "Terri-jo Rix",
      "numberOfStreams": 2893,
      "releaseYear": 1996,
      "durationInSeconds": 484
    },
    {
      "id": "031f0473-4779-4dbd-9ccb-cf0ec816bdb8",
      "songName": "Mauris ullamcorper purus sit amet nulla.",
      "artistName": "Annalise Belsey",
      "numberOfStreams": 3477,
      "releaseYear": 1993,
      "durationInSeconds": 385
    },
    {
      "id": "5656045e-356a-4079-ae30-c0253e94c574",
      "songName": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "artistName": "Candace McCorley",
      "numberOfStreams": 2228,
      "releaseYear": 2009,
      "durationInSeconds": 484
    },
    {
      "id": "3eaff13d-8e24-4bfc-a5de-e5cc29a7f545",
      "songName": "Fusce posuere felis sed lacus.",
      "artistName": "Suzette Deathridge",
      "numberOfStreams": 1358,
      "releaseYear": 1984,
      "durationInSeconds": 49
    },
    {
      "id": "51cfc3dc-c0d3-4b17-940a-8ed068b88298",
      "songName": "Integer a nibh.",
      "artistName": "Bendite Fray",
      "numberOfStreams": 2031,
      "releaseYear": 2010,
      "durationInSeconds": 251
    },
    {
      "id": "6ce70ad0-dc24-42f8-8dfe-16929e395ea4",
      "songName": "Sed ante.",
      "artistName": "Erich Gobel",
      "numberOfStreams": 269,
      "releaseYear": 2012,
      "durationInSeconds": 48
    },
    {
      "id": "a301c7de-7655-485e-8f24-71b275c82da7",
      "songName": "Donec dapibus.",
      "artistName": "Nial Troctor",
      "numberOfStreams": 1264,
      "releaseYear": 1994,
      "durationInSeconds": 333
    },
    {
      "id": "646f5936-4a3c-4041-893a-c56e09b9aff4",
      "songName": "In quis justo.",
      "artistName": "Fannie Marmion",
      "numberOfStreams": 1472,
      "releaseYear": 2012,
      "durationInSeconds": 10
    },
    {
      "id": "83386390-0971-4455-b4a7-cd5a78fad93a",
      "songName": "Pellentesque viverra pede ac diam.",
      "artistName": "Wilbert Kraut",
      "numberOfStreams": 1690,
      "releaseYear": 1962,
      "durationInSeconds": 33
    },
    {
      "id": "19a39ae0-3fc9-4c81-ab4e-e5d442d982e5",
      "songName": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "artistName": "Corella Raittie",
      "numberOfStreams": 4428,
      "releaseYear": 2000,
      "durationInSeconds": 328
    },
    {
      "id": "3ee06a5a-483f-442e-87bf-632bd81f0aa4",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Syd Skeldinge",
      "numberOfStreams": 2057,
      "releaseYear": 1995,
      "durationInSeconds": 324
    },
    {
      "id": "fdb04d24-f386-4832-a5fe-2e4170aa0bde",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Oralia Kingcote",
      "numberOfStreams": 244,
      "releaseYear": 1969,
      "durationInSeconds": 493
    },
    {
      "id": "ddaa3f8c-c053-4cd6-84fd-2dfdfed454ae",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Millard Reubbens",
      "numberOfStreams": 3485,
      "releaseYear": 2006,
      "durationInSeconds": 254
    },
    {
      "id": "72057361-8a77-4ac5-8e56-0e85e9ac4cbf",
      "songName": "Nulla tellus.",
      "artistName": "Skelly Bartali",
      "numberOfStreams": 2479,
      "releaseYear": 2008,
      "durationInSeconds": 252
    },
    {
      "id": "5b396b2f-8ac8-40a3-b41c-a9798375de65",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Bucky Vyel",
      "numberOfStreams": 4003,
      "releaseYear": 1998,
      "durationInSeconds": 428
    },
    {
      "id": "5167d806-d47e-48ef-aeac-ccde04f6cfd5",
      "songName": "Suspendisse potenti.",
      "artistName": "Anthony Kibbey",
      "numberOfStreams": 861,
      "releaseYear": 2003,
      "durationInSeconds": 350
    },
    {
      "id": "64a20237-f0be-45e2-9918-43d3f693fa65",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Jania Briereton",
      "numberOfStreams": 3246,
      "releaseYear": 2006,
      "durationInSeconds": 47
    },
    {
      "id": "a80d5f51-3099-45ec-ba58-de2d737eba68",
      "songName": "Nunc nisl.",
      "artistName": "Ian Bydaway",
      "numberOfStreams": 2043,
      "releaseYear": 1990,
      "durationInSeconds": 334
    },
    {
      "id": "110ec6e6-6ba8-42bc-916f-117ae71364b4",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Redford Woolfall",
      "numberOfStreams": 4997,
      "releaseYear": 1985,
      "durationInSeconds": 309
    },
    {
      "id": "fe361f14-9ab0-491a-b132-9c7b8a4b9907",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Maria Yeldham",
      "numberOfStreams": 3605,
      "releaseYear": 2009,
      "durationInSeconds": 494
    },
    {
      "id": "21590737-2a23-4c54-9a73-3b65c787f57b",
      "songName": "Vivamus vestibulum sagittis sapien.",
      "artistName": "Gwendolin Forsdike",
      "numberOfStreams": 3460,
      "releaseYear": 1993,
      "durationInSeconds": 178
    },
    {
      "id": "459f3802-7651-4bff-9791-0657575d6423",
      "songName": "Morbi ut odio.",
      "artistName": "Benny Grinikhinov",
      "numberOfStreams": 309,
      "releaseYear": 1993,
      "durationInSeconds": 338
    },
    {
      "id": "43cb36f8-4e93-406c-8545-f26af1f5f2ec",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Angelita Paroni",
      "numberOfStreams": 3492,
      "releaseYear": 1989,
      "durationInSeconds": 474
    },
    {
      "id": "4e9786dc-f78c-4c3a-abd6-94fd55f5ddc1",
      "songName": "Vivamus vestibulum sagittis sapien.",
      "artistName": "Anatollo Dreghorn",
      "numberOfStreams": 4925,
      "releaseYear": 2008,
      "durationInSeconds": 42
    },
    {
      "id": "d29f2534-73f3-4189-bc9f-6c6359a8994a",
      "songName": "Nulla tellus.",
      "artistName": "Sunny Stonman",
      "numberOfStreams": 3831,
      "releaseYear": 1994,
      "durationInSeconds": 40
    },
    {
      "id": "0e3fe54c-ecbe-45cf-8430-8c82bb9f90a4",
      "songName": "Praesent lectus.",
      "artistName": "Waylan Klimt",
      "numberOfStreams": 4956,
      "releaseYear": 2003,
      "durationInSeconds": 105
    },
    {
      "id": "b8295bd6-2bcc-42ce-8790-49c67742396f",
      "songName": "Mauris ullamcorper purus sit amet nulla.",
      "artistName": "Yoko Welfair",
      "numberOfStreams": 536,
      "releaseYear": 1992,
      "durationInSeconds": 140
    },
    {
      "id": "49ac6016-4ad7-4487-bda8-62ba2fb9242d",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Flora Corbet",
      "numberOfStreams": 4738,
      "releaseYear": 2011,
      "durationInSeconds": 100
    },
    {
      "id": "7a1356ce-da29-429b-b121-dc766661d6f1",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Andres Jewis",
      "numberOfStreams": 1638,
      "releaseYear": 2002,
      "durationInSeconds": 59
    },
    {
      "id": "c1dde101-9ddc-4da1-bc6b-57b9d9e85d95",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Hillard Fitzsimmons",
      "numberOfStreams": 2417,
      "releaseYear": 2008,
      "durationInSeconds": 287
    },
    {
      "id": "62dbfea8-1b62-464c-8765-557a8a0dbeb5",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Pegeen Markie",
      "numberOfStreams": 1662,
      "releaseYear": 2004,
      "durationInSeconds": 397
    },
    {
      "id": "e6f5e172-6415-44c0-89eb-498001d9e6f8",
      "songName": "Integer a nibh.",
      "artistName": "Tiertza Corringham",
      "numberOfStreams": 4942,
      "releaseYear": 2003,
      "durationInSeconds": 304
    },
    {
      "id": "dec67f33-0884-4f3d-a36d-75f88986313b",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Abigael Scandrite",
      "numberOfStreams": 3590,
      "releaseYear": 1995,
      "durationInSeconds": 449
    },
    {
      "id": "e41432d3-25ff-43d8-a194-fa4de0bd940b",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Kassia Sweetland",
      "numberOfStreams": 1579,
      "releaseYear": 1999,
      "durationInSeconds": 401
    },
    {
      "id": "ea028aa2-0638-4d4e-8f30-c98b14fc0ba7",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Sidnee Bucham",
      "numberOfStreams": 1406,
      "releaseYear": 2004,
      "durationInSeconds": 281
    },
    {
      "id": "14a3d2d7-e34d-4c87-8041-027eb5130db8",
      "songName": "Fusce consequat.",
      "artistName": "Camey Widdowes",
      "numberOfStreams": 1348,
      "releaseYear": 1968,
      "durationInSeconds": 87
    },
    {
      "id": "2466ba75-8ea1-4eb3-b3e8-12ef9f8a42d9",
      "songName": "Nam nulla.",
      "artistName": "Ingra Tilmouth",
      "numberOfStreams": 1205,
      "releaseYear": 2002,
      "durationInSeconds": 427
    },
    {
      "id": "03c68917-bbc8-4334-8ef2-afc68582b58e",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Saunders Ricker",
      "numberOfStreams": 4899,
      "releaseYear": 2002,
      "durationInSeconds": 140
    },
    {
      "id": "720d28f3-31e2-4014-8ce8-3c815f8d004f",
      "songName": "Donec ut dolor.",
      "artistName": "Ahmed Veronique",
      "numberOfStreams": 1521,
      "releaseYear": 2007,
      "durationInSeconds": 78
    },
    {
      "id": "0142fe69-bf5e-4d31-aad9-9fe3799662f0",
      "songName": "In eleifend quam a odio.",
      "artistName": "Falkner Bonhan",
      "numberOfStreams": 3390,
      "releaseYear": 1999,
      "durationInSeconds": 240
    },
    {
      "id": "92aa4e18-a24b-424e-bc68-1d253a2c4e32",
      "songName": "In sagittis dui vel nisl.",
      "artistName": "Isis Larvent",
      "numberOfStreams": 2775,
      "releaseYear": 2003,
      "durationInSeconds": 287
    },
    {
      "id": "3527a875-6cee-46f3-8285-2bdc18d4548c",
      "songName": "Aliquam non mauris.",
      "artistName": "Rebecca Armitt",
      "numberOfStreams": 2619,
      "releaseYear": 1991,
      "durationInSeconds": 220
    },
    {
      "id": "e59f75f7-8263-4fe6-a3f0-14ef786654a5",
      "songName": "Sed sagittis.",
      "artistName": "Adelheid Hexam",
      "numberOfStreams": 4085,
      "releaseYear": 1998,
      "durationInSeconds": 31
    },
    {
      "id": "71ec5a6c-60ad-410e-92d2-f7abf665cea4",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Binnie Bogey",
      "numberOfStreams": 3524,
      "releaseYear": 1994,
      "durationInSeconds": 398
    },
    {
      "id": "bf93879e-b718-4cd1-9cd6-97f51d0d2146",
      "songName": "Nulla tempus.",
      "artistName": "Babs Hawe",
      "numberOfStreams": 1728,
      "releaseYear": 2012,
      "durationInSeconds": 7
    },
    {
      "id": "fcdcffdf-eee8-4045-98b1-c41afc787bd3",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Margarette Wittman",
      "numberOfStreams": 2517,
      "releaseYear": 1995,
      "durationInSeconds": 87
    },
    {
      "id": "9ba16e44-e595-47e0-99fc-0dcecbeb49d8",
      "songName": "Suspendisse ornare consequat lectus.",
      "artistName": "Ranee Anlay",
      "numberOfStreams": 3013,
      "releaseYear": 2005,
      "durationInSeconds": 425
    },
    {
      "id": "ff35be50-3e6d-4ea2-8454-bdd231623b5f",
      "songName": "Cras pellentesque volutpat dui.",
      "artistName": "Norri Olivella",
      "numberOfStreams": 2745,
      "releaseYear": 2000,
      "durationInSeconds": 353
    },
    {
      "id": "92935914-ee4e-4cf1-a5cb-d29394175e8f",
      "songName": "Duis bibendum.",
      "artistName": "Earvin Barkess",
      "numberOfStreams": 173,
      "releaseYear": 2013,
      "durationInSeconds": 173
    },
    {
      "id": "62e8412c-216f-4bf7-a1c8-8e9d23fd3ddc",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Shelia Crumby",
      "numberOfStreams": 4269,
      "releaseYear": 2001,
      "durationInSeconds": 443
    },
    {
      "id": "95a92fc0-0237-43c4-af34-bc89c28c0c77",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Ham Scotchmor",
      "numberOfStreams": 3489,
      "releaseYear": 2011,
      "durationInSeconds": 51
    },
    {
      "id": "71570abf-0c50-4b27-ba94-346ef87c92b6",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Meaghan Lemmen",
      "numberOfStreams": 1688,
      "releaseYear": 2001,
      "durationInSeconds": 481
    },
    {
      "id": "66c7856d-e411-4ad1-86e5-86fb1485a6b5",
      "songName": "Integer a nibh.",
      "artistName": "Tarah Goodrich",
      "numberOfStreams": 4417,
      "releaseYear": 1994,
      "durationInSeconds": 449
    },
    {
      "id": "d56fb8d8-43a6-45d1-ad5e-4385054aa3a8",
      "songName": "Nulla ac enim.",
      "artistName": "Kendra Lalley",
      "numberOfStreams": 398,
      "releaseYear": 2008,
      "durationInSeconds": 121
    },
    {
      "id": "ee7a1f56-6632-43ca-917b-9803139daf23",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Joscelin Manilove",
      "numberOfStreams": 2217,
      "releaseYear": 1999,
      "durationInSeconds": 146
    },
    {
      "id": "6b7943fe-20eb-44a0-98da-98bf4e8d2a3c",
      "songName": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "artistName": "Wes Jiggens",
      "numberOfStreams": 1383,
      "releaseYear": 1992,
      "durationInSeconds": 371
    },
    {
      "id": "723c8ab7-638c-4e1f-b46e-f54f0a8ee678",
      "songName": "Pellentesque at nulla.",
      "artistName": "Grady Yashunin",
      "numberOfStreams": 1179,
      "releaseYear": 1999,
      "durationInSeconds": 374
    },
    {
      "id": "0777421a-39da-4dcf-b025-98294af1aa14",
      "songName": "Nulla facilisi.",
      "artistName": "Alvis Kervin",
      "numberOfStreams": 754,
      "releaseYear": 1993,
      "durationInSeconds": 107
    },
    {
      "id": "daf02a90-0f08-4722-a760-cdb994a47199",
      "songName": "Sed accumsan felis.",
      "artistName": "Claudelle Cruikshank",
      "numberOfStreams": 4267,
      "releaseYear": 2008,
      "durationInSeconds": 460
    },
    {
      "id": "c01b1251-c10d-4dec-9d8b-f8347d866d6a",
      "songName": "Nunc purus.",
      "artistName": "Ashla Brick",
      "numberOfStreams": 1773,
      "releaseYear": 2009,
      "durationInSeconds": 210
    },
    {
      "id": "f3d148db-c0e8-4d92-bac6-a74f408c82bf",
      "songName": "Duis mattis egestas metus.",
      "artistName": "Massimiliano Flux",
      "numberOfStreams": 1871,
      "releaseYear": 1997,
      "durationInSeconds": 322
    },
    {
      "id": "bdad7b59-3336-46d7-bd9a-c95985097252",
      "songName": "Integer ac leo.",
      "artistName": "Cati Goodhall",
      "numberOfStreams": 3197,
      "releaseYear": 2003,
      "durationInSeconds": 379
    },
    {
      "id": "5287a8e0-89f5-4a72-afcf-256dfa986f94",
      "songName": "Duis bibendum.",
      "artistName": "Malia Aldham",
      "numberOfStreams": 2340,
      "releaseYear": 2003,
      "durationInSeconds": 251
    },
    {
      "id": "44980456-2faa-470b-b172-e1b0984c014d",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Seka Nansom",
      "numberOfStreams": 3014,
      "releaseYear": 1995,
      "durationInSeconds": 349
    },
    {
      "id": "124c7dcd-3534-4dff-9d16-b9d5b6dfa37c",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Hodge Royal",
      "numberOfStreams": 1279,
      "releaseYear": 1994,
      "durationInSeconds": 136
    },
    {
      "id": "0fd1c4be-b0ea-4e70-baba-6194641cad29",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Retha Petronis",
      "numberOfStreams": 4578,
      "releaseYear": 1996,
      "durationInSeconds": 47
    },
    {
      "id": "a77de18b-6130-4f1c-bd54-7acd5a222886",
      "songName": "Nulla tempus.",
      "artistName": "Orelle Cajkler",
      "numberOfStreams": 4167,
      "releaseYear": 1997,
      "durationInSeconds": 5
    },
    {
      "id": "7edbe088-311d-4087-97ee-65270ed89665",
      "songName": "Nullam varius.",
      "artistName": "Delaney Beards",
      "numberOfStreams": 4620,
      "releaseYear": 1990,
      "durationInSeconds": 410
    },
    {
      "id": "7311d78d-020f-4546-bcaf-7d2ca2ccc3ff",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Dell Aylott",
      "numberOfStreams": 212,
      "releaseYear": 1991,
      "durationInSeconds": 362
    },
    {
      "id": "642cea6d-bd7f-42b8-a45c-8d1eaca94f90",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Frederich Jarret",
      "numberOfStreams": 4444,
      "releaseYear": 2005,
      "durationInSeconds": 481
    },
    {
      "id": "3bec1b32-baf1-49d4-add1-e5a6ee3d6208",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Claire Govenlock",
      "numberOfStreams": 2633,
      "releaseYear": 1998,
      "durationInSeconds": 148
    },
    {
      "id": "3ff413d9-dbb4-4a13-b924-322ca81c2618",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Mariann Hatchette",
      "numberOfStreams": 4672,
      "releaseYear": 2006,
      "durationInSeconds": 247
    },
    {
      "id": "cbf593d9-193b-4e26-a378-f89b67d0ac74",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Romona Ellam",
      "numberOfStreams": 1724,
      "releaseYear": 2005,
      "durationInSeconds": 109
    },
    {
      "id": "b0d6e263-1062-43b2-99ad-7ce4cd96535a",
      "songName": "Integer ac leo.",
      "artistName": "Loydie Spittle",
      "numberOfStreams": 861,
      "releaseYear": 2007,
      "durationInSeconds": 55
    },
    {
      "id": "ea1e475a-8eee-48d6-9ec6-bac00545b1a5",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Julie Calliss",
      "numberOfStreams": 2332,
      "releaseYear": 1997,
      "durationInSeconds": 445
    },
    {
      "id": "c553114e-cdf8-4c8c-8a3f-d6e4e9713302",
      "songName": "Mauris ullamcorper purus sit amet nulla.",
      "artistName": "Audi Eason",
      "numberOfStreams": 3741,
      "releaseYear": 2007,
      "durationInSeconds": 41
    },
    {
      "id": "aebe0e8a-aa26-4967-a799-cc3beb4bc567",
      "songName": "Nullam varius.",
      "artistName": "Van Forrestill",
      "numberOfStreams": 1780,
      "releaseYear": 1990,
      "durationInSeconds": 384
    },
    {
      "id": "c852091f-4d59-4089-81b4-c527ea4e2d48",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Carry Oldland",
      "numberOfStreams": 3546,
      "releaseYear": 2001,
      "durationInSeconds": 332
    },
    {
      "id": "b09bbae2-31f2-4458-a500-6cb2cbe45620",
      "songName": "Integer ac neque.",
      "artistName": "Dionne Missen",
      "numberOfStreams": 3398,
      "releaseYear": 2011,
      "durationInSeconds": 45
    },
    {
      "id": "806ed8c1-b479-4667-a8c8-87453c886fcc",
      "songName": "Aenean lectus.",
      "artistName": "Daniela Cunnow",
      "numberOfStreams": 1821,
      "releaseYear": 2007,
      "durationInSeconds": 156
    },
    {
      "id": "aa9a38d0-4f8c-4486-86a5-954ea8c31e01",
      "songName": "In congue.",
      "artistName": "Marylin Eykelbosch",
      "numberOfStreams": 862,
      "releaseYear": 2008,
      "durationInSeconds": 202
    },
    {
      "id": "6a8641d6-8715-4806-8d17-7187d9172d7e",
      "songName": "Nunc purus.",
      "artistName": "Gael O' Meara",
      "numberOfStreams": 738,
      "releaseYear": 1998,
      "durationInSeconds": 75
    },
    {
      "id": "fef18b46-8a40-4fd6-b8ca-d32cd69125cb",
      "songName": "Morbi porttitor lorem id ligula.",
      "artistName": "Tresa Treamayne",
      "numberOfStreams": 25,
      "releaseYear": 1984,
      "durationInSeconds": 250
    },
    {
      "id": "afb826ab-586a-442c-ae33-1399860ee7ab",
      "songName": "Aenean sit amet justo.",
      "artistName": "Adelind Giovanitti",
      "numberOfStreams": 1604,
      "releaseYear": 1993,
      "durationInSeconds": 165
    },
    {
      "id": "982e94d0-18a8-4673-aad4-a559fdaf1058",
      "songName": "Nam nulla.",
      "artistName": "Perla Whorall",
      "numberOfStreams": 607,
      "releaseYear": 2006,
      "durationInSeconds": 451
    },
    {
      "id": "70dcef40-164e-444a-9fb6-a529ffb6e4fa",
      "songName": "Maecenas ut massa quis augue luctus tincidunt.",
      "artistName": "Malissia Elsip",
      "numberOfStreams": 404,
      "releaseYear": 2008,
      "durationInSeconds": 269
    },
    {
      "id": "91c5f5ed-ffb5-4e90-bfc8-3fb92a5c9613",
      "songName": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      "artistName": "Saunderson Youthead",
      "numberOfStreams": 2332,
      "releaseYear": 2001,
      "durationInSeconds": 181
    },
    {
      "id": "50a7f493-3128-4003-a173-eaec13eadd4d",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Nollie Challen",
      "numberOfStreams": 2370,
      "releaseYear": 1986,
      "durationInSeconds": 256
    },
    {
      "id": "a4bdc89f-0f6f-4f69-a21d-8a0a0210fb21",
      "songName": "Aliquam non mauris.",
      "artistName": "Rickert Chessun",
      "numberOfStreams": 3386,
      "releaseYear": 2009,
      "durationInSeconds": 483
    },
    {
      "id": "a1753c15-bd65-444a-a51b-831f726fe3e0",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Drusie Smorfit",
      "numberOfStreams": 595,
      "releaseYear": 1995,
      "durationInSeconds": 213
    },
    {
      "id": "81d6b19d-69e4-4437-8f83-ddc8b215f73a",
      "songName": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "artistName": "Modesty MacWilliam",
      "numberOfStreams": 984,
      "releaseYear": 1995,
      "durationInSeconds": 117
    },
    {
      "id": "3aaed080-23cb-46fc-9587-08a389dcc56b",
      "songName": "In eleifend quam a odio.",
      "artistName": "Anatol Tissiman",
      "numberOfStreams": 3641,
      "releaseYear": 2010,
      "durationInSeconds": 149
    },
    {
      "id": "95661a5d-5847-4641-84cc-5dbd835847c9",
      "songName": "Mauris lacinia sapien quis libero.",
      "artistName": "Cos Hanton",
      "numberOfStreams": 1916,
      "releaseYear": 2002,
      "durationInSeconds": 357
    },
    {
      "id": "d6b3ffde-1431-47b1-aaa7-94bef0d92418",
      "songName": "Maecenas pulvinar lobortis est.",
      "artistName": "Floria Ovanesian",
      "numberOfStreams": 2973,
      "releaseYear": 2002,
      "durationInSeconds": 318
    },
    {
      "id": "a05ac977-a98c-47a8-8178-e5665d75fec4",
      "songName": "Duis mattis egestas metus.",
      "artistName": "Berte Ede",
      "numberOfStreams": 1171,
      "releaseYear": 1988,
      "durationInSeconds": 351
    },
    {
      "id": "733bfa24-eaea-4741-9146-1255dc292977",
      "songName": "Morbi a ipsum.",
      "artistName": "Tadeas Cordero",
      "numberOfStreams": 1132,
      "releaseYear": 1997,
      "durationInSeconds": 180
    },
    {
      "id": "03e9be70-93bf-4428-a20d-471f22ed4370",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Lester Creek",
      "numberOfStreams": 494,
      "releaseYear": 2007,
      "durationInSeconds": 310
    },
    {
      "id": "ba10b481-5071-48a6-ab89-bd18f1fc2937",
      "songName": "Nullam porttitor lacus at turpis.",
      "artistName": "Christie Van Baaren",
      "numberOfStreams": 1668,
      "releaseYear": 1998,
      "durationInSeconds": 242
    },
    {
      "id": "03ec6538-5876-4a25-8f58-56eb29070993",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Betsy Dumingo",
      "numberOfStreams": 130,
      "releaseYear": 1993,
      "durationInSeconds": 407
    },
    {
      "id": "895c6139-0b12-4497-9c8b-5b6277b0e4f4",
      "songName": "Pellentesque eget nunc.",
      "artistName": "Mozes Speerman",
      "numberOfStreams": 3275,
      "releaseYear": 1998,
      "durationInSeconds": 430
    },
    {
      "id": "b7e1e474-7086-406f-8aab-15feb58d6ef5",
      "songName": "Etiam vel augue.",
      "artistName": "Franni Jenicek",
      "numberOfStreams": 4630,
      "releaseYear": 2008,
      "durationInSeconds": 443
    },
    {
      "id": "e9a7dbd9-49e3-43b9-a419-368341966172",
      "songName": "Etiam faucibus cursus urna.",
      "artistName": "Weston Schimann",
      "numberOfStreams": 2384,
      "releaseYear": 1994,
      "durationInSeconds": 8
    },
    {
      "id": "08852339-4f14-4a1e-964c-dd7b9807ddc1",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Kennedy Cabotto",
      "numberOfStreams": 659,
      "releaseYear": 2011,
      "durationInSeconds": 80
    },
    {
      "id": "ae742197-37d4-4cb6-b31c-3e0354d5ca51",
      "songName": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "artistName": "Arv Cahey",
      "numberOfStreams": 2114,
      "releaseYear": 2007,
      "durationInSeconds": 478
    },
    {
      "id": "8768b5a1-38ac-4681-b654-ed4077b41043",
      "songName": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "artistName": "Jaymee Sperwell",
      "numberOfStreams": 2880,
      "releaseYear": 1994,
      "durationInSeconds": 241
    },
    {
      "id": "b92159b4-146e-4ec1-a0e7-98b6ef6d93e2",
      "songName": "Vivamus in felis eu sapien cursus vestibulum.",
      "artistName": "Gunther Faircliff",
      "numberOfStreams": 3455,
      "releaseYear": 2007,
      "durationInSeconds": 262
    },
    {
      "id": "f7e83ad7-b25c-4581-8b44-ace0336faecb",
      "songName": "Quisque ut erat.",
      "artistName": "Perren Sloey",
      "numberOfStreams": 1232,
      "releaseYear": 2012,
      "durationInSeconds": 122
    },
    {
      "id": "c69f7b5c-def2-4dec-959a-5372529ae6d0",
      "songName": "Quisque ut erat.",
      "artistName": "Hayes Berndtssen",
      "numberOfStreams": 585,
      "releaseYear": 2007,
      "durationInSeconds": 358
    },
    {
      "id": "34c4768b-deef-457c-9307-d87c8f46cf26",
      "songName": "Sed accumsan felis.",
      "artistName": "Junina Vina",
      "numberOfStreams": 3294,
      "releaseYear": 1998,
      "durationInSeconds": 408
    },
    {
      "id": "80ab8dde-f167-4390-bb6e-95f1948cec92",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Marsha Chansonne",
      "numberOfStreams": 3352,
      "releaseYear": 2012,
      "durationInSeconds": 391
    },
    {
      "id": "aeb8d88d-bb50-40f3-8f87-0ce12a0e7028",
      "songName": "Vivamus tortor.",
      "artistName": "Moselle Mathely",
      "numberOfStreams": 3028,
      "releaseYear": 2000,
      "durationInSeconds": 1
    },
    {
      "id": "eef474cd-9ff4-4603-9106-334599804559",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Glendon Onslow",
      "numberOfStreams": 36,
      "releaseYear": 2004,
      "durationInSeconds": 81
    },
    {
      "id": "d88e8e5e-8690-4d0a-b614-7f2a23e442f0",
      "songName": "Donec vitae nisi.",
      "artistName": "Diane-marie Capelle",
      "numberOfStreams": 3268,
      "releaseYear": 1999,
      "durationInSeconds": 459
    },
    {
      "id": "e3408d10-c778-48b2-9d17-c6c642b225e6",
      "songName": "Integer ac leo.",
      "artistName": "Hirsch Brabin",
      "numberOfStreams": 1129,
      "releaseYear": 1992,
      "durationInSeconds": 101
    },
    {
      "id": "c85a07f8-b34a-4c78-b13b-63046ee58f59",
      "songName": "Proin interdum mauris non ligula pellentesque ultrices.",
      "artistName": "Ev Bugge",
      "numberOfStreams": 473,
      "releaseYear": 1967,
      "durationInSeconds": 290
    },
    {
      "id": "f51a1ec4-0d2b-4340-b80c-d8cf288c3c2e",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Ruggiero Canon",
      "numberOfStreams": 1977,
      "releaseYear": 2010,
      "durationInSeconds": 200
    },
    {
      "id": "795e4802-3354-47b0-9ce3-de831272b51f",
      "songName": "Integer ac leo.",
      "artistName": "Thane Bickell",
      "numberOfStreams": 525,
      "releaseYear": 1991,
      "durationInSeconds": 54
    },
    {
      "id": "ddeb3612-ca94-494b-ae1d-5128e4983a6e",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Stavros Normavill",
      "numberOfStreams": 658,
      "releaseYear": 2002,
      "durationInSeconds": 101
    },
    {
      "id": "4aef6b30-3a08-4fdd-b4f2-050dc23fa6c5",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Ronny Kaubisch",
      "numberOfStreams": 3715,
      "releaseYear": 2002,
      "durationInSeconds": 154
    },
    {
      "id": "d8aaf7c0-2b06-45a9-85a4-2d1939e6a210",
      "songName": "Fusce consequat.",
      "artistName": "Giffy Cunde",
      "numberOfStreams": 3123,
      "releaseYear": 2004,
      "durationInSeconds": 329
    },
    {
      "id": "821b669b-7255-4201-8327-143cfb63491b",
      "songName": "Nulla facilisi.",
      "artistName": "Germain Kelson",
      "numberOfStreams": 197,
      "releaseYear": 2012,
      "durationInSeconds": 55
    },
    {
      "id": "685b66c3-3b5a-403f-9f6a-9dd6d3aab475",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      "artistName": "Catherin Deniskevich",
      "numberOfStreams": 4007,
      "releaseYear": 1994,
      "durationInSeconds": 364
    },
    {
      "id": "4db99b7f-786a-44e1-aa07-1ebafb0141b4",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Dare Mowlam",
      "numberOfStreams": 622,
      "releaseYear": 2008,
      "durationInSeconds": 59
    },
    {
      "id": "d3c03c59-3b51-4d06-8dcc-78a641aa254e",
      "songName": "Integer ac leo.",
      "artistName": "Bert Daveran",
      "numberOfStreams": 3212,
      "releaseYear": 2011,
      "durationInSeconds": 458
    },
    {
      "id": "e307500d-d48e-4d3d-b2d0-f3f276a0dc2e",
      "songName": "Ut at dolor quis odio consequat varius.",
      "artistName": "Marlena Lemme",
      "numberOfStreams": 10,
      "releaseYear": 2011,
      "durationInSeconds": 144
    },
    {
      "id": "7bf7b048-4abf-41dc-ab88-931814e76076",
      "songName": "Vivamus vestibulum sagittis sapien.",
      "artistName": "Corinne Danett",
      "numberOfStreams": 640,
      "releaseYear": 2011,
      "durationInSeconds": 464
    },
    {
      "id": "bfb44094-0afb-4dd9-8b18-483055b5d47b",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Tasia Rickert",
      "numberOfStreams": 3988,
      "releaseYear": 1997,
      "durationInSeconds": 159
    },
    {
      "id": "cc5da462-197a-42ab-bbcf-683e638cc8f2",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      "artistName": "Linda Barg",
      "numberOfStreams": 3084,
      "releaseYear": 1984,
      "durationInSeconds": 126
    },
    {
      "id": "2f7dc8b3-7d23-49f0-86e4-bbc1932b1f98",
      "songName": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "artistName": "Maryellen Bottrill",
      "numberOfStreams": 4512,
      "releaseYear": 1997,
      "durationInSeconds": 240
    },
    {
      "id": "3c8dc970-6f30-4e04-8d47-6423866c4b4d",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Matelda Gudd",
      "numberOfStreams": 4168,
      "releaseYear": 2002,
      "durationInSeconds": 243
    },
    {
      "id": "c42c7d5f-9b77-440c-a4a6-e3ff91ed312c",
      "songName": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "artistName": "Krispin Dybell",
      "numberOfStreams": 4051,
      "releaseYear": 2009,
      "durationInSeconds": 92
    },
    {
      "id": "bd765cb3-7b16-4557-9cdf-33686bf05df3",
      "songName": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      "artistName": "Verena Saby",
      "numberOfStreams": 899,
      "releaseYear": 1999,
      "durationInSeconds": 427
    },
    {
      "id": "b92f3d94-6b1e-4a6b-9e77-4162cfea8fc4",
      "songName": "Morbi non quam nec dui luctus rutrum.",
      "artistName": "Berri Girling",
      "numberOfStreams": 1500,
      "releaseYear": 1985,
      "durationInSeconds": 164
    },
    {
      "id": "98a89b6c-041f-43e4-9ce8-8d98b1796524",
      "songName": "In eleifend quam a odio.",
      "artistName": "Fayre Haugen",
      "numberOfStreams": 241,
      "releaseYear": 2000,
      "durationInSeconds": 52
    },
    {
      "id": "6cd69d0a-4197-4dba-af9d-52269aaa2ea3",
      "songName": "Cras in purus eu magna vulputate luctus.",
      "artistName": "Sidoney Corradi",
      "numberOfStreams": 274,
      "releaseYear": 2003,
      "durationInSeconds": 429
    },
    {
      "id": "f2816b8f-e9bb-4786-9b1a-9d4b4a51c0f7",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Alfie Hufton",
      "numberOfStreams": 1933,
      "releaseYear": 1992,
      "durationInSeconds": 33
    },
    {
      "id": "a0f179f8-add1-4136-b429-53d5b99a4d00",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Zacharias Nann",
      "numberOfStreams": 5000,
      "releaseYear": 1992,
      "durationInSeconds": 450
    },
    {
      "id": "d704569a-a9af-42a9-b868-8e7cfd50c9eb",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Juditha Parry",
      "numberOfStreams": 566,
      "releaseYear": 2005,
      "durationInSeconds": 149
    },
    {
      "id": "57900bf4-2e7c-454b-a537-4dc7f870b748",
      "songName": "Fusce consequat.",
      "artistName": "Valaria Seller",
      "numberOfStreams": 1724,
      "releaseYear": 1995,
      "durationInSeconds": 141
    },
    {
      "id": "26c51970-b4b5-42e4-8d2d-1c8f200f5517",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Vladimir Skitteral",
      "numberOfStreams": 501,
      "releaseYear": 2012,
      "durationInSeconds": 362
    },
    {
      "id": "ee13b25b-a51d-468f-ae2f-f58f4de579bf",
      "songName": "Integer ac leo.",
      "artistName": "Carla Hackett",
      "numberOfStreams": 4546,
      "releaseYear": 2001,
      "durationInSeconds": 303
    },
    {
      "id": "ab623fb4-bde1-4dd4-9097-65381eabd55f",
      "songName": "Etiam vel augue.",
      "artistName": "Alic Johansson",
      "numberOfStreams": 187,
      "releaseYear": 2000,
      "durationInSeconds": 439
    },
    {
      "id": "0d490c7a-8654-4488-94c6-8d522f99ab64",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Shepherd Boldra",
      "numberOfStreams": 822,
      "releaseYear": 2000,
      "durationInSeconds": 479
    },
    {
      "id": "b18fd25b-545f-45ff-b937-972432b75635",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Hamlen Vasilov",
      "numberOfStreams": 2564,
      "releaseYear": 1996,
      "durationInSeconds": 298
    },
    {
      "id": "b4559356-d155-47de-95f4-2575860be90c",
      "songName": "Pellentesque ultrices mattis odio.",
      "artistName": "Aloysia Puckham",
      "numberOfStreams": 4486,
      "releaseYear": 2001,
      "durationInSeconds": 230
    },
    {
      "id": "68457113-5dc2-42cf-9b8f-7478b0003947",
      "songName": "Nulla nisl.",
      "artistName": "Amata Woodyer",
      "numberOfStreams": 3156,
      "releaseYear": 2000,
      "durationInSeconds": 50
    },
    {
      "id": "d7e63393-9150-4449-97ff-6cf1677eed05",
      "songName": "Sed sagittis.",
      "artistName": "Bathsheba Hallwood",
      "numberOfStreams": 4554,
      "releaseYear": 1994,
      "durationInSeconds": 218
    },
    {
      "id": "09d16da7-2999-4934-9fdd-5aad913a9592",
      "songName": "Morbi non lectus.",
      "artistName": "Dwain Duprey",
      "numberOfStreams": 2670,
      "releaseYear": 1984,
      "durationInSeconds": 299
    },
    {
      "id": "3559c7f4-4353-450d-9aef-52b1ee7177e8",
      "songName": "Integer ac leo.",
      "artistName": "Lee Mangeney",
      "numberOfStreams": 587,
      "releaseYear": 1995,
      "durationInSeconds": 74
    },
    {
      "id": "fa653af0-ea2f-4e92-8b13-0320151be1cc",
      "songName": "Suspendisse accumsan tortor quis turpis.",
      "artistName": "Fernando Eberle",
      "numberOfStreams": 1082,
      "releaseYear": 2010,
      "durationInSeconds": 291
    },
    {
      "id": "70e41604-9523-4ef1-ae78-d1ba79f73ea3",
      "songName": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "artistName": "Hedvige Nesbitt",
      "numberOfStreams": 1154,
      "releaseYear": 2003,
      "durationInSeconds": 271
    },
    {
      "id": "b7c11f38-1438-472f-b441-43908fa9ba4b",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Cobb Slegg",
      "numberOfStreams": 2377,
      "releaseYear": 2008,
      "durationInSeconds": 266
    },
    {
      "id": "22bf58ae-f746-46d9-bc4f-2693f9837679",
      "songName": "Maecenas rhoncus aliquam lacus.",
      "artistName": "Latashia Maylam",
      "numberOfStreams": 1475,
      "releaseYear": 2010,
      "durationInSeconds": 248
    },
    {
      "id": "b1463f94-2580-4691-a6b9-332cc68a8903",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Mirella Queste",
      "numberOfStreams": 3928,
      "releaseYear": 2001,
      "durationInSeconds": 221
    },
    {
      "id": "4b754a4a-7c9b-4873-91cd-27af2c4fd77d",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Lucinda Semechik",
      "numberOfStreams": 2809,
      "releaseYear": 1999,
      "durationInSeconds": 425
    },
    {
      "id": "97d25ae8-1891-46b6-9645-20f1a8819529",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      "artistName": "Beatrisa Beakes",
      "numberOfStreams": 1927,
      "releaseYear": 1992,
      "durationInSeconds": 137
    },
    {
      "id": "ab609d64-3f89-4767-ba81-e6aeb1b253f7",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Annadiana Hiom",
      "numberOfStreams": 408,
      "releaseYear": 2008,
      "durationInSeconds": 366
    },
    {
      "id": "f5b25b0e-326d-435b-80fa-6ce1da2c83f2",
      "songName": "Integer tincidunt ante vel ipsum.",
      "artistName": "Bo Dorrity",
      "numberOfStreams": 2820,
      "releaseYear": 2004,
      "durationInSeconds": 13
    },
    {
      "id": "657d0083-fb86-4afa-99f3-162417491ffb",
      "songName": "Nullam porttitor lacus at turpis.",
      "artistName": "Leroi Kilban",
      "numberOfStreams": 1750,
      "releaseYear": 2009,
      "durationInSeconds": 232
    },
    {
      "id": "f4fdfdf3-696d-4262-bcd3-03a254b97524",
      "songName": "Nam tristique tortor eu pede.",
      "artistName": "Evelina Jagielski",
      "numberOfStreams": 1472,
      "releaseYear": 1998,
      "durationInSeconds": 359
    },
    {
      "id": "e3e1e933-e6b0-4de1-9315-5b7f08b3b929",
      "songName": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "artistName": "Timi Mardy",
      "numberOfStreams": 1995,
      "releaseYear": 2005,
      "durationInSeconds": 263
    },
    {
      "id": "7c11236a-bf1e-4833-a7d8-682e92f38c06",
      "songName": "Fusce consequat.",
      "artistName": "Fredek Steabler",
      "numberOfStreams": 845,
      "releaseYear": 2008,
      "durationInSeconds": 382
    },
    {
      "id": "1bd130ec-6cb5-490c-9594-b1159b7a6b1b",
      "songName": "Quisque porta volutpat erat.",
      "artistName": "Raquel Adamovsky",
      "numberOfStreams": 1340,
      "releaseYear": 1998,
      "durationInSeconds": 111
    },
    {
      "id": "453901f3-a206-4f64-a12a-bc2230681fac",
      "songName": "Pellentesque at nulla.",
      "artistName": "Shem Lambol",
      "numberOfStreams": 2903,
      "releaseYear": 2008,
      "durationInSeconds": 212
    },
    {
      "id": "ac8ba68b-61b2-4879-a70a-7920cbab9f75",
      "songName": "Aliquam sit amet diam in magna bibendum imperdiet.",
      "artistName": "Siegfried Middleditch",
      "numberOfStreams": 309,
      "releaseYear": 1990,
      "durationInSeconds": 376
    },
    {
      "id": "757c81ce-9d0a-462d-a2e5-ddc511f39eae",
      "songName": "Curabitur at ipsum ac tellus semper interdum.",
      "artistName": "Jamie Oldrey",
      "numberOfStreams": 1322,
      "releaseYear": 1993,
      "durationInSeconds": 128
    },
    {
      "id": "766287fd-24f5-4384-a438-c4ed60cd1ab0",
      "songName": "Sed vel enim sit amet nunc viverra dapibus.",
      "artistName": "Dane Ewert",
      "numberOfStreams": 1469,
      "releaseYear": 2012,
      "durationInSeconds": 256
    },
    {
      "id": "da501f67-380f-47b5-b5af-baa4792f7d88",
      "songName": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "artistName": "Mitchell Creamer",
      "numberOfStreams": 2600,
      "releaseYear": 1995,
      "durationInSeconds": 146
    },
    {
      "id": "890e987b-fc07-48be-8949-b5778ec5978e",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Jorry Gauford",
      "numberOfStreams": 3811,
      "releaseYear": 2002,
      "durationInSeconds": 21
    },
    {
      "id": "53b61d18-6db4-4f45-9dee-d181d55a6dc4",
      "songName": "Integer a nibh.",
      "artistName": "Carey Claeskens",
      "numberOfStreams": 4435,
      "releaseYear": 2010,
      "durationInSeconds": 218
    },
    {
      "id": "a3cd5416-756b-422f-8a0d-362d17d5f86c",
      "songName": "Phasellus sit amet erat.",
      "artistName": "Ursulina McUre",
      "numberOfStreams": 4026,
      "releaseYear": 1993,
      "durationInSeconds": 93
    },
    {
      "id": "df4fe595-688e-4ffe-aea5-0212cde1ce3f",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Sondra Donn",
      "numberOfStreams": 537,
      "releaseYear": 1995,
      "durationInSeconds": 201
    },
    {
      "id": "8dd8ec0c-ad70-4d15-83da-079ab5492df0",
      "songName": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "artistName": "Marillin Kubicka",
      "numberOfStreams": 979,
      "releaseYear": 2008,
      "durationInSeconds": 339
    },
    {
      "id": "e0ae5f48-3528-48e0-b369-8a4e66d16be6",
      "songName": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "artistName": "Sherill Brennand",
      "numberOfStreams": 902,
      "releaseYear": 2006,
      "durationInSeconds": 73
    },
    {
      "id": "8c4ea911-6ee8-48c8-88c3-a78808fdd165",
      "songName": "Mauris sit amet eros.",
      "artistName": "Granger Lince",
      "numberOfStreams": 4998,
      "releaseYear": 2010,
      "durationInSeconds": 16
    },
    {
      "id": "0838547f-d362-45e2-9bf4-d2b12660ae15",
      "songName": "Maecenas tincidunt lacus at velit.",
      "artistName": "Halli Philimore",
      "numberOfStreams": 3151,
      "releaseYear": 2011,
      "durationInSeconds": 134
    },
    {
      "id": "e8b2ca1d-c3ac-42a3-8fab-63e548bcd8e8",
      "songName": "Morbi non quam nec dui luctus rutrum.",
      "artistName": "Silvester Lucchi",
      "numberOfStreams": 555,
      "releaseYear": 2011,
      "durationInSeconds": 292
    },
    {
      "id": "fe9a1770-d5f5-41b4-b505-660ed10cbc54",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Windham Romanet",
      "numberOfStreams": 951,
      "releaseYear": 1985,
      "durationInSeconds": 244
    },
    {
      "id": "3a6da5e9-2104-4ae7-97aa-1327ca583095",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Nathanil Checci",
      "numberOfStreams": 2514,
      "releaseYear": 2003,
      "durationInSeconds": 366
    },
    {
      "id": "6958bd4c-95a3-4853-b3a7-f49af67fdf46",
      "songName": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "artistName": "Asa Raxworthy",
      "numberOfStreams": 4784,
      "releaseYear": 2006,
      "durationInSeconds": 218
    },
    {
      "id": "086bfb9e-ca78-48e8-9618-ed4b18e702c7",
      "songName": "Sed ante.",
      "artistName": "Eleanore Lowmass",
      "numberOfStreams": 4124,
      "releaseYear": 1988,
      "durationInSeconds": 260
    },
    {
      "id": "7e39d258-fc55-49a3-b2a2-833d8895b221",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Vivian Denison",
      "numberOfStreams": 4272,
      "releaseYear": 2007,
      "durationInSeconds": 60
    },
    {
      "id": "a9d977d3-3392-42a8-ae5c-49bab7af012c",
      "songName": "Nulla ac enim.",
      "artistName": "Gifford Matfield",
      "numberOfStreams": 3142,
      "releaseYear": 2012,
      "durationInSeconds": 149
    },
    {
      "id": "84741d96-f4f7-432e-b4f1-2986a5492166",
      "songName": "Duis mattis egestas metus.",
      "artistName": "D'arcy Cornick",
      "numberOfStreams": 3978,
      "releaseYear": 2012,
      "durationInSeconds": 120
    },
    {
      "id": "07246bdb-f20b-4a8f-8149-9feb452d3421",
      "songName": "Quisque ut erat.",
      "artistName": "Roddie Thomason",
      "numberOfStreams": 2211,
      "releaseYear": 2005,
      "durationInSeconds": 480
    },
    {
      "id": "df646001-89c3-4fb4-833b-4cb1b2a6ac49",
      "songName": "In quis justo.",
      "artistName": "Gerrie Bellamy",
      "numberOfStreams": 3072,
      "releaseYear": 1989,
      "durationInSeconds": 22
    },
    {
      "id": "0d36bbd1-01b0-496c-bef9-b2d03ff458c0",
      "songName": "Nulla justo.",
      "artistName": "Cammy Fullerd",
      "numberOfStreams": 1326,
      "releaseYear": 2012,
      "durationInSeconds": 370
    },
    {
      "id": "228738a1-a6ce-4e09-9117-2d4b92acb029",
      "songName": "Integer ac neque.",
      "artistName": "Langston Mair",
      "numberOfStreams": 92,
      "releaseYear": 1993,
      "durationInSeconds": 262
    },
    {
      "id": "d890925f-2ee8-44e4-a490-a191801a66bc",
      "songName": "Morbi ut odio.",
      "artistName": "Sibylla Bramwich",
      "numberOfStreams": 78,
      "releaseYear": 1996,
      "durationInSeconds": 25
    },
    {
      "id": "c68499d5-3066-4e43-b096-5f9975bfb639",
      "songName": "Etiam vel augue.",
      "artistName": "Jocelyne Champkin",
      "numberOfStreams": 2016,
      "releaseYear": 2006,
      "durationInSeconds": 166
    },
    {
      "id": "67fdaa41-d602-412e-b9f2-c639173d3fe9",
      "songName": "Nulla tellus.",
      "artistName": "Margery Kenway",
      "numberOfStreams": 4490,
      "releaseYear": 2002,
      "durationInSeconds": 276
    },
    {
      "id": "ad56ff88-3486-44e6-a7ae-73f9ab47cf2b",
      "songName": "Phasellus in felis.",
      "artistName": "Rolph Jozsa",
      "numberOfStreams": 2800,
      "releaseYear": 2000,
      "durationInSeconds": 316
    },
    {
      "id": "c8f819c5-37a8-4b5f-81c6-b34a8c1c8212",
      "songName": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "artistName": "Inger Seabright",
      "numberOfStreams": 4141,
      "releaseYear": 2005,
      "durationInSeconds": 372
    },
    {
      "id": "26b61dd7-3b29-49e5-aa7d-adb25e3a857c",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Cindie Jowle",
      "numberOfStreams": 3510,
      "releaseYear": 2001,
      "durationInSeconds": 125
    },
    {
      "id": "d4db60c5-84b3-4c28-9d57-5f7b2323429a",
      "songName": "Aenean lectus.",
      "artistName": "Maxy Richarson",
      "numberOfStreams": 5000,
      "releaseYear": 2005,
      "durationInSeconds": 220
    },
    {
      "id": "86706f2b-e0f7-4fbf-a1f2-0df98c1efbd6",
      "songName": "Nam nulla.",
      "artistName": "Chariot Witham",
      "numberOfStreams": 4706,
      "releaseYear": 1998,
      "durationInSeconds": 218
    },
    {
      "id": "8f1e3830-281d-4e2d-929e-ef0f5249e0f5",
      "songName": "Praesent blandit lacinia erat.",
      "artistName": "Giraldo Hanalan",
      "numberOfStreams": 333,
      "releaseYear": 2007,
      "durationInSeconds": 317
    },
    {
      "id": "08a47118-6bc0-48da-97d6-52899fabfd6e",
      "songName": "Etiam justo.",
      "artistName": "Jillie Bowle",
      "numberOfStreams": 3003,
      "releaseYear": 2011,
      "durationInSeconds": 141
    },
    {
      "id": "a5533fc9-b72e-4eb6-b1c5-5798e1f3d805",
      "songName": "Mauris lacinia sapien quis libero.",
      "artistName": "Mackenzie Vye",
      "numberOfStreams": 1457,
      "releaseYear": 1997,
      "durationInSeconds": 402
    },
    {
      "id": "31898164-22b9-45d2-ad68-c6eebc33712a",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Geneva Quesne",
      "numberOfStreams": 4017,
      "releaseYear": 2008,
      "durationInSeconds": 364
    },
    {
      "id": "44a28bb9-8e44-45f3-b281-f9e943b902e3",
      "songName": "Nulla tempus.",
      "artistName": "Lauralee Perel",
      "numberOfStreams": 227,
      "releaseYear": 1991,
      "durationInSeconds": 186
    },
    {
      "id": "4b8f5fea-2346-4167-bd33-d6bd135bf2a9",
      "songName": "In eleifend quam a odio.",
      "artistName": "Felicio Draijer",
      "numberOfStreams": 3647,
      "releaseYear": 1999,
      "durationInSeconds": 228
    },
    {
      "id": "8458c0d2-1c78-42d3-b314-58e26c3b4269",
      "songName": "Mauris sit amet eros.",
      "artistName": "Shurwood Newson",
      "numberOfStreams": 2497,
      "releaseYear": 1997,
      "durationInSeconds": 175
    },
    {
      "id": "b3281868-5f1d-47bd-a586-6312e9a791d5",
      "songName": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "artistName": "Jilli Di Bartolomeo",
      "numberOfStreams": 3779,
      "releaseYear": 1992,
      "durationInSeconds": 227
    },
    {
      "id": "0de55690-9fe0-41b4-91b0-664e8ae5ed3d",
      "songName": "In blandit ultrices enim.",
      "artistName": "Kayle Bertlin",
      "numberOfStreams": 3855,
      "releaseYear": 2010,
      "durationInSeconds": 355
    },
    {
      "id": "ebe8e506-dfbe-4a4c-b28a-e0ceb4caa04d",
      "songName": "Etiam vel augue.",
      "artistName": "Loralee Sprasen",
      "numberOfStreams": 806,
      "releaseYear": 1993,
      "durationInSeconds": 423
    },
    {
      "id": "d04a67fc-0138-418c-9f0b-1e73a1bdb1c6",
      "songName": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "artistName": "Aurthur Van Dijk",
      "numberOfStreams": 3013,
      "releaseYear": 1999,
      "durationInSeconds": 398
    },
    {
      "id": "5cc05fe8-95dc-47cf-9a29-6b0aa84fcf1d",
      "songName": "Duis ac nibh.",
      "artistName": "Mable Mather",
      "numberOfStreams": 1854,
      "releaseYear": 1997,
      "durationInSeconds": 5
    },
    {
      "id": "296671b8-7ab5-4b7e-8a1e-a1de0d3fc397",
      "songName": "Integer non velit.",
      "artistName": "Colet Witcomb",
      "numberOfStreams": 2054,
      "releaseYear": 2003,
      "durationInSeconds": 284
    },
    {
      "id": "10f3e40a-940c-4a99-a7f6-8ffeabde082b",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Joane Burress",
      "numberOfStreams": 1398,
      "releaseYear": 2008,
      "durationInSeconds": 54
    },
    {
      "id": "2b007052-fc52-4d74-a7a3-43f22deb9b9b",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Warner Iwanowicz",
      "numberOfStreams": 1411,
      "releaseYear": 2007,
      "durationInSeconds": 356
    },
    {
      "id": "47313282-fbfb-4e92-ba41-481c8cfffc90",
      "songName": "Morbi a ipsum.",
      "artistName": "Abagail Lorraway",
      "numberOfStreams": 4643,
      "releaseYear": 1996,
      "durationInSeconds": 292
    },
    {
      "id": "6b53d2f3-8361-441f-8cc5-c91da16688c1",
      "songName": "Phasellus in felis.",
      "artistName": "Kanya Byforth",
      "numberOfStreams": 1333,
      "releaseYear": 1992,
      "durationInSeconds": 467
    },
    {
      "id": "5b29cd13-441e-4574-9262-e1c4ff610808",
      "songName": "Duis mattis egestas metus.",
      "artistName": "Selby Duffit",
      "numberOfStreams": 3415,
      "releaseYear": 1997,
      "durationInSeconds": 272
    },
    {
      "id": "541be1aa-0968-4dd3-9014-9d55b35a4491",
      "songName": "Etiam justo.",
      "artistName": "Vergil Lemmertz",
      "numberOfStreams": 4466,
      "releaseYear": 1989,
      "durationInSeconds": 114
    },
    {
      "id": "bffd751d-40c0-468b-8915-2bbd5de16820",
      "songName": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "artistName": "Major Prise",
      "numberOfStreams": 1854,
      "releaseYear": 2007,
      "durationInSeconds": 160
    },
    {
      "id": "7262b2e0-5f64-4feb-b19a-6555b517e6c7",
      "songName": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "artistName": "Helaina Willacot",
      "numberOfStreams": 3546,
      "releaseYear": 1990,
      "durationInSeconds": 278
    },
    {
      "id": "24892ac7-aef3-4341-be9a-d89d4b874cfc",
      "songName": "Sed sagittis.",
      "artistName": "Ingram Ofield",
      "numberOfStreams": 2692,
      "releaseYear": 1996,
      "durationInSeconds": 347
    },
    {
      "id": "168c2885-42a5-4447-ae06-1d192b94b9be",
      "songName": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "artistName": "Tybi Vedntyev",
      "numberOfStreams": 1189,
      "releaseYear": 2004,
      "durationInSeconds": 118
    },
    {
      "id": "9fc176fe-1205-42b0-81de-06fd751b8d5b",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Radcliffe Pigny",
      "numberOfStreams": 4065,
      "releaseYear": 1995,
      "durationInSeconds": 341
    },
    {
      "id": "d1bed8a9-1c73-4d23-b868-b64daeb319c4",
      "songName": "Phasellus in felis.",
      "artistName": "Faustina Swyre",
      "numberOfStreams": 3683,
      "releaseYear": 2009,
      "durationInSeconds": 301
    },
    {
      "id": "8461ba49-2bd3-433c-8f1e-0b2ee9b1e759",
      "songName": "Nam nulla.",
      "artistName": "Hermine Di Lucia",
      "numberOfStreams": 2090,
      "releaseYear": 2011,
      "durationInSeconds": 279
    },
    {
      "id": "572617e4-a03f-47fa-8cb1-690e6f0781c3",
      "songName": "Duis consequat dui nec nisi volutpat eleifend.",
      "artistName": "Paige Nassi",
      "numberOfStreams": 4270,
      "releaseYear": 2011,
      "durationInSeconds": 65
    },
    {
      "id": "38bff8fc-7a77-40a9-96ff-7c8d64af5857",
      "songName": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "artistName": "Lyman Tynewell",
      "numberOfStreams": 2143,
      "releaseYear": 1990,
      "durationInSeconds": 483
    },
    {
      "id": "d377d343-48d0-4bfe-8688-d85c42237ee3",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Norman Haggerstone",
      "numberOfStreams": 2886,
      "releaseYear": 2005,
      "durationInSeconds": 136
    },
    {
      "id": "2eeb47e1-4655-4a0c-bfa7-0beca1728f38",
      "songName": "Pellentesque ultrices mattis odio.",
      "artistName": "Norbert Beverstock",
      "numberOfStreams": 3893,
      "releaseYear": 2001,
      "durationInSeconds": 412
    },
    {
      "id": "4448e293-06a7-40ee-9bf7-a05a6295b736",
      "songName": "Aliquam quis turpis eget elit sodales scelerisque.",
      "artistName": "Joye Stringer",
      "numberOfStreams": 2957,
      "releaseYear": 1985,
      "durationInSeconds": 157
    },
    {
      "id": "7ac19bd8-0da7-4a1d-9ca3-0b18de5d62b7",
      "songName": "Nunc nisl.",
      "artistName": "Tawsha Barnsley",
      "numberOfStreams": 1131,
      "releaseYear": 1991,
      "durationInSeconds": 207
    },
    {
      "id": "20ff5d1f-92d1-456c-ab8a-385dac3cbb6a",
      "songName": "Pellentesque at nulla.",
      "artistName": "Torrance Baudy",
      "numberOfStreams": 861,
      "releaseYear": 1997,
      "durationInSeconds": 110
    },
    {
      "id": "7b0c5e66-b14e-4357-a149-2f7928be4de4",
      "songName": "Morbi vel lectus in quam fringilla rhoncus.",
      "artistName": "Bo Simcox",
      "numberOfStreams": 4973,
      "releaseYear": 2008,
      "durationInSeconds": 262
    },
    {
      "id": "860d5f03-b4f9-416e-8076-e2a07638377c",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Thurston Barfield",
      "numberOfStreams": 4594,
      "releaseYear": 1985,
      "durationInSeconds": 329
    },
    {
      "id": "e3ff49fa-6f2f-4e28-aaf8-afa3a5989fa9",
      "songName": "Integer a nibh.",
      "artistName": "Moritz Josselson",
      "numberOfStreams": 190,
      "releaseYear": 1992,
      "durationInSeconds": 85
    },
    {
      "id": "54a09971-bffc-4283-9379-d6adced6afd7",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Trenna Behrendsen",
      "numberOfStreams": 1341,
      "releaseYear": 1998,
      "durationInSeconds": 365
    },
    {
      "id": "f3f79d54-2b5c-4e90-925b-723a522bc739",
      "songName": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      "artistName": "Odelia Persey",
      "numberOfStreams": 4543,
      "releaseYear": 2005,
      "durationInSeconds": 447
    },
    {
      "id": "fa86db6d-c6c6-4456-ad1c-c324a0424442",
      "songName": "Duis at velit eu est congue elementum.",
      "artistName": "Gerald Tabbernor",
      "numberOfStreams": 443,
      "releaseYear": 2012,
      "durationInSeconds": 410
    },
    {
      "id": "d6e0ae96-9b84-4bd5-a303-5e3a3bcd4e96",
      "songName": "Maecenas rhoncus aliquam lacus.",
      "artistName": "Regen Jeromson",
      "numberOfStreams": 4890,
      "releaseYear": 1996,
      "durationInSeconds": 318
    },
    {
      "id": "132956b5-1cce-43b7-b180-4e687e20bab2",
      "songName": "Mauris ullamcorper purus sit amet nulla.",
      "artistName": "Verina Murfill",
      "numberOfStreams": 491,
      "releaseYear": 1993,
      "durationInSeconds": 414
    },
    {
      "id": "493a0811-9d10-4fd0-acd3-a663ea2025e3",
      "songName": "Curabitur in libero ut massa volutpat convallis.",
      "artistName": "Kiel Woodier",
      "numberOfStreams": 4687,
      "releaseYear": 1983,
      "durationInSeconds": 80
    },
    {
      "id": "262d27ec-cc56-4c31-bf9b-b69c13e4b3f8",
      "songName": "Donec semper sapien a libero.",
      "artistName": "Mechelle Josovitz",
      "numberOfStreams": 776,
      "releaseYear": 2004,
      "durationInSeconds": 416
    },
    {
      "id": "316366b1-f7af-4929-86cf-782ed4960a0c",
      "songName": "Vivamus vestibulum sagittis sapien.",
      "artistName": "Ashly Gartenfeld",
      "numberOfStreams": 4977,
      "releaseYear": 1994,
      "durationInSeconds": 440
    },
    {
      "id": "d672acad-c6ff-4124-bd7c-614aed0f031b",
      "songName": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "artistName": "Lorenzo Ivory",
      "numberOfStreams": 506,
      "releaseYear": 2005,
      "durationInSeconds": 28
    },
    {
      "id": "8bf187b7-b619-4643-821d-fc80bd64a567",
      "songName": "Nullam porttitor lacus at turpis.",
      "artistName": "Gwyneth Ivanchin",
      "numberOfStreams": 431,
      "releaseYear": 1999,
      "durationInSeconds": 302
    },
    {
      "id": "338e09ab-6273-432d-8410-975f8c92f82e",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Zelig Houndsom",
      "numberOfStreams": 627,
      "releaseYear": 2006,
      "durationInSeconds": 252
    },
    {
      "id": "7364595a-80f4-4eab-80aa-ea49dff4e5b8",
      "songName": "Pellentesque at nulla.",
      "artistName": "Lenci Nunns",
      "numberOfStreams": 946,
      "releaseYear": 2009,
      "durationInSeconds": 100
    },
    {
      "id": "a993556a-3225-4a7a-a5c1-0011b6294e24",
      "songName": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "artistName": "Montgomery Bellefant",
      "numberOfStreams": 4676,
      "releaseYear": 1977,
      "durationInSeconds": 13
    },
    {
      "id": "cb4e9e48-4eb3-4b72-9e63-da811cc6f3b4",
      "songName": "Nulla mollis molestie lorem.",
      "artistName": "Zara Clucas",
      "numberOfStreams": 2484,
      "releaseYear": 1999,
      "durationInSeconds": 332
    },
    {
      "id": "b64fb193-71a2-4dda-8e81-6048ed137b50",
      "songName": "Nunc nisl.",
      "artistName": "Rheta Frawley",
      "numberOfStreams": 932,
      "releaseYear": 2009,
      "durationInSeconds": 497
    },
    {
      "id": "b18dbad5-64a2-4458-8373-4745a8ec19d7",
      "songName": "Nulla tempus.",
      "artistName": "Bobbye Sebastian",
      "numberOfStreams": 4996,
      "releaseYear": 1998,
      "durationInSeconds": 431
    },
    {
      "id": "b2320758-bc79-4fe0-8256-02449067360d",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Boniface Hickisson",
      "numberOfStreams": 3351,
      "releaseYear": 1967,
      "durationInSeconds": 378
    },
    {
      "id": "9338639c-d8bf-473d-9ad7-8dd3826c2335",
      "songName": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "artistName": "Bertrand Ranger",
      "numberOfStreams": 1244,
      "releaseYear": 1990,
      "durationInSeconds": 197
    },
    {
      "id": "39664067-4d84-493b-b9a3-4fb4fc92f0e5",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Milton Ansill",
      "numberOfStreams": 3096,
      "releaseYear": 2007,
      "durationInSeconds": 453
    },
    {
      "id": "d48b7a96-6f2f-45a8-9e85-905e6130881d",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      "artistName": "Caralie MacDuffie",
      "numberOfStreams": 1658,
      "releaseYear": 2001,
      "durationInSeconds": 3
    },
    {
      "id": "948887f3-1f92-4c10-b285-987a7b2f8062",
      "songName": "Vestibulum rutrum rutrum neque.",
      "artistName": "Parry Iltchev",
      "numberOfStreams": 3703,
      "releaseYear": 1996,
      "durationInSeconds": 244
    },
    {
      "id": "7962b71a-1f5e-4b6f-820c-0c16ae9b3bf4",
      "songName": "Etiam justo.",
      "artistName": "Teddy Noli",
      "numberOfStreams": 388,
      "releaseYear": 2006,
      "durationInSeconds": 215
    },
    {
      "id": "ea112da8-5a8a-480d-948a-7b8361953bd4",
      "songName": "Donec dapibus.",
      "artistName": "Lemuel Landells",
      "numberOfStreams": 3400,
      "releaseYear": 1995,
      "durationInSeconds": 424
    },
    {
      "id": "faff74d4-8f5c-439b-9469-766f6a8dd222",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Hastie Herreran",
      "numberOfStreams": 47,
      "releaseYear": 2007,
      "durationInSeconds": 475
    },
    {
      "id": "4941ae79-b115-4c7e-a872-6fe5911e4f8c",
      "songName": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "artistName": "Daisey Edler",
      "numberOfStreams": 3584,
      "releaseYear": 2005,
      "durationInSeconds": 314
    },
    {
      "id": "b2096cd7-ef6f-4c21-b8ec-932c30bee2c9",
      "songName": "Praesent blandit.",
      "artistName": "Granny Spofford",
      "numberOfStreams": 3668,
      "releaseYear": 1997,
      "durationInSeconds": 182
    },
    {
      "id": "408d3d6f-a3f8-47cf-a6bc-6ffc9774ba97",
      "songName": "Praesent id massa id nisl venenatis lacinia.",
      "artistName": "Emmeline Lucio",
      "numberOfStreams": 2580,
      "releaseYear": 2004,
      "durationInSeconds": 412
    },
    {
      "id": "726856e6-bf83-484b-82dd-7aa778134d23",
      "songName": "Sed accumsan felis.",
      "artistName": "Erma Drissell",
      "numberOfStreams": 3057,
      "releaseYear": 1996,
      "durationInSeconds": 164
    },
    {
      "id": "d5a6f22e-4ba8-473e-a64a-2b6326f4a19b",
      "songName": "In congue.",
      "artistName": "Ozzy Beyer",
      "numberOfStreams": 4777,
      "releaseYear": 2007,
      "durationInSeconds": 418
    },
    {
      "id": "985d0607-8f4f-4fe0-b9b4-e2c6d66dc5d3",
      "songName": "Vestibulum sed magna at nunc commodo placerat.",
      "artistName": "Billye Tejero",
      "numberOfStreams": 288,
      "releaseYear": 1993,
      "durationInSeconds": 330
    },
    {
      "id": "35df1ed2-dbf5-4553-960b-bd50a7c6fee9",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Clay Beneteau",
      "numberOfStreams": 2002,
      "releaseYear": 1993,
      "durationInSeconds": 229
    },
    {
      "id": "7ba1ac72-021c-4c85-b921-b7d0a1b38d0c",
      "songName": "Nullam molestie nibh in lectus.",
      "artistName": "Koressa Ellinor",
      "numberOfStreams": 4588,
      "releaseYear": 1994,
      "durationInSeconds": 296
    },
    {
      "id": "834fa3fe-0307-4254-8524-c2d261353d99",
      "songName": "Suspendisse potenti.",
      "artistName": "Gusti Aluard",
      "numberOfStreams": 2608,
      "releaseYear": 2001,
      "durationInSeconds": 337
    },
    {
      "id": "1574ef04-d6bf-4533-993d-0ac7c8fffa91",
      "songName": "Cras pellentesque volutpat dui.",
      "artistName": "Val Bindley",
      "numberOfStreams": 223,
      "releaseYear": 1986,
      "durationInSeconds": 82
    },
    {
      "id": "17f2e8c2-bf38-4e0c-993d-e144da5f43bc",
      "songName": "Aliquam erat volutpat.",
      "artistName": "Anette Dubois",
      "numberOfStreams": 4162,
      "releaseYear": 1997,
      "durationInSeconds": 283
    },
    {
      "id": "15a1214e-232f-422a-9591-7f14dff2b8da",
      "songName": "Fusce posuere felis sed lacus.",
      "artistName": "Hayley Bexon",
      "numberOfStreams": 4748,
      "releaseYear": 1998,
      "durationInSeconds": 197
    },
    {
      "id": "1de45da0-771f-4303-b475-3a12e97d5b67",
      "songName": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "artistName": "Cad Gallihawk",
      "numberOfStreams": 3038,
      "releaseYear": 1994,
      "durationInSeconds": 442
    },
    {
      "id": "1b8e582c-39e6-4264-aee5-315aa123270f",
      "songName": "Integer ac neque.",
      "artistName": "Lilias Yepiskopov",
      "numberOfStreams": 3842,
      "releaseYear": 2011,
      "durationInSeconds": 179
    },
    {
      "id": "e78f74f7-7093-4738-8ad6-d3d8985ca314",
      "songName": "In hac habitasse platea dictumst.",
      "artistName": "Elset Lamberton",
      "numberOfStreams": 2249,
      "releaseYear": 1991,
      "durationInSeconds": 428
    },
    {
      "id": "bdadb286-e2f7-46ee-b282-9808e5b91c98",
      "songName": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      "artistName": "Burch Pert",
      "numberOfStreams": 1268,
      "releaseYear": 1992,
      "durationInSeconds": 366
    },
    {
      "id": "180ddb00-4c72-471c-a43a-d461881ade09",
      "songName": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      "artistName": "Enrichetta Mc Ilwrick",
      "numberOfStreams": 3992,
      "releaseYear": 1993,
      "durationInSeconds": 65
    },
    {
      "id": "e4855f5f-8af3-4426-be16-6111c5cecffb",
      "songName": "Morbi quis tortor id nulla ultrices aliquet.",
      "artistName": "Leta Rudyard",
      "numberOfStreams": 4957,
      "releaseYear": 2011,
      "durationInSeconds": 425
    },
    {
      "id": "925dc2d9-538d-4893-9810-d0d92add05c8",
      "songName": "Sed ante.",
      "artistName": "Christin Laurie",
      "numberOfStreams": 2110,
      "releaseYear": 2013,
      "durationInSeconds": 315
    },
    {
      "id": "862ac63f-caf6-452b-aed3-35147e9f2cc6",
      "songName": "Vivamus vel nulla eget eros elementum pellentesque.",
      "artistName": "Noellyn Bragge",
      "numberOfStreams": 2702,
      "releaseYear": 1999,
      "durationInSeconds": 213
    }
  ];

  songData = [...this.songList];

  sortAttribute = 'null';

  itemsToBeDeleted: Array<string> = [];

  addNewSong(newSong: Song): void{
    const songExists = this.songList.find(song => song.songName === newSong.songName && song.artistName === newSong.artistName);
    if (songExists) {
      alert("Song already exists");
    }
    else{
      this.songList.unshift(newSong);
    }
  }

  search(songName: string, artistName: string): void{
    console.log(this.itemsToBeDeleted);
    this.songList = this.songData.filter((song) => {
      return song.songName.toLowerCase().startsWith(songName) && song.artistName.toLowerCase().startsWith(artistName);
    });
  }
  

  sort(attribute: string): void {
    if (this.sortAttribute != attribute) {

      this.sortAttribute = attribute;

      this.songList.sort((a: any, b: any) => {

        if (a[attribute] < b[attribute]) {
          return -1;
        } else if (a[attribute] > b[attribute]) {
          return 1;
        } else {
          return 0;
        }
      });
    } 
    else {

      this.sortAttribute = 'null';
      this.songList.sort((a: any, b: any) => {

        if (a[attribute] < b[attribute]) {
          return 1;
        } else if (a[attribute] > b[attribute]) {
          return -1;

        } else {
          return 0;
        }
      });
    }
  }

  storeItemsToBeDeleted(arr: Array<string>): void{
    this.itemsToBeDeleted = arr;
    console.log(this.itemsToBeDeleted);
  }
  
  deleteSongs(): void{
    console.log('deleting items');
    this.itemsToBeDeleted.forEach((id) => {
      this.songList = this.songList.filter((song) => song.id !== id);
    });
    console.log('items deleted successfully');
    this.itemsToBeDeleted.length = 0;
  }
}
