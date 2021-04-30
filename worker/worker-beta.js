/**
 * A Script Redesigned by Parveen Bhadoo from GOIndex at https://github.com/ParveenBhadooOfficial/Google-Drive-Index
 */

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.
const serviceaccounts = [
    { "type": "service_account", "project_id": "bendrive-278010", "private_key_id": "7e089d871a818ffecd1ee0e72f24cc0608cb7c3f", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDM0YEmQkm8ngcP\n36UH51s5ycm6XectnuuiyVHaejiq5QJ4JyS1I7zRNHHO1b79ZdobyYhxANktAEEf\n2oGk4C/oCOUBg2Tsmw7MC9mCTj/QBWvJX4s2E7L9QwSlAiG1M1j/v0/a3kmwrO3/\nwEbrgUczbd3BjdhhSaDbHB8Ffz4lSM59YfkXkxOlJPFWimZmiR5qYTaqSWqkwDbR\nVcKKX4bapWYaoyccEJI0husuQyy6JE0+HrpOuX3UJdb7Eh7ZU67aZzS3bfm41CwF\n4nL1joYk5gaNE5z2iTh3iR/HeRB5f/CjKCxifF65hwR+oUEtrw+EOrVROoflS5yV\nMZA7dX9lAgMBAAECggEAH2D/iNWCB4Asc82fMoFK9CUKn19Qkig1UJjIThEIioIQ\naUkR8iB6BpEi2H3dx2Op0TUEjs+C9kaCM7edwh1IqaNnNl6jgS5WS4OLPM/xLdUO\nyOi24r+M3gk89mzHrkOiIHh2awFAR+2Ofu69zsndFy9/WG57VphZqQf7ZrOyWTKy\nqRj1CejPs+jFwzBXgjs+Ap+TFV9SnI+2gDV1Oaywwm+Fkc7ae6nTwuxOUKWY9ty2\nxaVYCo61G5m/LmtHUlIc8h7zApo899zBWFSg7ik4LkfMm9offpdgyHGEECFO1lAd\nSI6/b8xSZnhJO9jZ0zQ3rrqTmK0hdqQmbVoAzHN7NwKBgQDnglqiEmxR56JNdPw2\ndjsVY3zX85y8sv+vKuuWcVc+yQVo1CSCB8NhmC3OOuH2JHxplZ/4gB9AONWR8YI0\nH4MyKcszpRsoffDaChp4Qilk0yMGPdLX6geYll5y6PTGO70DypWNKm/9VspeL0yH\nxGEad0MF42CeBmE06hYW4jIOswKBgQDifFHTPl6xm6N2fDDDHeL34kBHyxmNCzPJ\nSxyp8kEDcO/1scYxqvq1uQr/bTsbAspBZog5bXDa8HAorkWqDQMNlPX6lNJ9jBOe\nWBR9BRu3YWRInU4sE2GG/9Gj95VV3VwH17fCEmIR5GVUtEU3xZN9Xs4xm+fBNZN/\nYVwau0DFhwKBgBhV2oMY3qwJZkUwG+b5rKJF7/SfVgV752aZY2RQC7S82sW3LxNA\nD6itn3sDM4d1NGLA6Kztgtt0XfbWZTJncZoPTJ3kKCOsgWnaEAg+JC3GB/N7AjPS\nFPRUMh9wH3LLCsZgQDIzmMwPmHwoCqpm2TI4ASKYUSqrTwKJ7MKBCnQDAoGBAMQN\nr9s340rFmpOnX6KXTXEc9l3vbxfL+bEnBxIJ9cNf0SiTEijOhCYon1+Kk56HJMPG\nWOe1V/r+JWjhqsZQazMnnmKizy8EwbrRLjMm594vPVsqaI/42vS8oCHa4PeqHc9g\nKd6igShR2HGhd0WXD1x4Y+9HsS9sDFk40z0EmUYjAoGAREM2XHaLxLmUYlPL74zv\n9N+JTTEmVW+v6MLE5d536XcehZtX0ZS1i3kIq2L8IgJ9FR1VKdrKgVGXTp5e+dA3\nVqvJX8niresT2ru1Gv8QgiA8FyknbfD9CwGDXbhA09LLXA3wbhEOFci7D7LHVV0w\nrnd27TUjVuYKUfBY9GG8/vs=\n-----END PRIVATE KEY-----\n", "client_email": "bendrive-sa-1@bendrive-278010.iam.gserviceaccount.com", "client_id": "105671430162870674061", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bendrive-sa-1%40bendrive-278010.iam.gserviceaccount.com" },
    { "type": "service_account", "project_id": "bendrive-278010", "private_key_id": "cc2195a1b3c4633c18437c33ad1571fd45c5f2c2", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5fGB1aWLMs2fr\niuUyfEwzlPcFl1k4zDTlBe372dNmbFPN1MRp3eStS+YD9CpkYVQxVISJEXAYB/Bm\nhv/hgbTAw99h6DKjt+qqaDiXDg+B+0KboBTL2Dnw1yutJBrmaBJWthM5FMJAmsT3\nc+URSkvi3BVgLH9BDJb2iSP3sBsshiku/vmVs4GL8keWW5DM41P6hgzYDp7+a4EJ\nvs8z2VRQCTG8+qDRm/ACbO/S7PXRgCgJocIWdYKWU6e5dtzV48FdUxaA9rB8VZgl\n/cMnkfWMh5k94DKFimh/KCry2F+K9W7INwNo4G+jxH39io1CaTYZGoaEL7XT6ggo\ninVzPhl5AgMBAAECggEAFwS1X7y9UxPskJGDEfnU5w3UffAjVWYaJlXPC9MjZfGJ\nkOCXo1+zEkJ6AAGcBSsC7MBFVlFArOrHTaHxPUYAbW+hWCAdsK2RRKZ8Z1qKWCIb\nSP7btdRWlGnPdMQnRnKh2/rqdcn6tVO/n8nVIokq07NmP7Il9KegUGYCfalwJd0l\nmGlnI/3Y1QJXh6WW0VjgKam8Na5Pn2A9F6GR+69IMMFchGm7WE/jQzhkLS4Q25lC\nTDe7GyG/wZe99clTyjn8qeML+CJmd7w9nF+GKwuoU9pwL77NoqKxI6wcSdiwguyN\nmHlPJcMA+0WATWoeKcRH7shNT97RagCNfvKsUKsaRQKBgQD/baAgqEHTs0DFSQQj\nHiV/SMwuKTdN0M/KuZay0aTjV1ifKhZm2tcyu4zW23lT5kogfxqkrLB7LoNLYA+3\nwUyaiAmDRgK2NZ9LXfJZZ4eH3neh7fVGfvav9rrA2TaW17fOZ8B+m8u7ZE1qnaIR\nmCaAVyy3Isaa7tYx9DkhSvEItwKBgQC55quiFSsE+n5v012VUFIyKb/696lqHhg4\nIIsF1pjrOcwzVRhL5363k4Ak4NgCsFCBLv4ePGKCqFNRYPLB4UJLQXNRWAaf1uJz\nal2c+e6PT/xi5M2CwPjEo9XzJqn89rF50ScNUDVCUzehzzJPKSESI8BKs2c9LboM\nrL4CbuPfTwKBgQD29IOj72mth5qw47Z3SZdRaA3Y94p71s6AH00/WIgGMZYCVQvR\np/X2G/TAavP0FSxIHPuiiUAb6M2SG682p1Ir+ijQXekTR+baVFuS6xDTYVjjG5FP\n9kMFwBOxjpFD6A7TJearwm+InyJmWT+vqR5YaXBXI+1HMHGxXIG72ZwPIwKBgDTx\nJF/8d0vrqqZeI4CqZz4x9aKbdXvrJiqV2gHHo7UZuLXFvi2ft87ACvZ1sg7R95tS\nrrwdplBfb5r1aS0d4atc8GJyFzDeGY+U8yQJaY8W0GG5l21tV2to3T1p/W81MkXm\n8qAv/3rsCCPkxgcVR33LALBFd1lM9Hc3msVGn06xAoGAZCSb3p8j6KusWR5Wmvvy\nqJS2C0J9L1nst7QFgb8iCQrXBDoUQCKYMQPOStgXHwrUETD63mOFfNO5wgUwKIaD\nbe8Rmv9zWP02sHQTRg+upPnGu5KYXKxjJ3lFu7ZkFhL0gsl8Mw/Lurc5gDq4J2Vv\nKB4AD0R5796Ep0mvrjDNp7w=\n-----END PRIVATE KEY-----\n", "client_email": "bendrive-sa-2@bendrive-278010.iam.gserviceaccount.com", "client_id": "110948570965354791246", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bendrive-sa-2%40bendrive-278010.iam.gserviceaccount.com" },
    { "type": "service_account", "project_id": "bendrive-278010", "private_key_id": "c6543d0c3988f234e19e763eba2c5b04727204a5", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDInb78PceHY6Tl\ndOUspDEjIujerSp5PwV6wBiry3E8vcYP7WP6f1Htiz5q/aLUm/GG5Tf2P4DwQvVP\n7QqWOAM0Ex69wzdutlyV3SbLa33SNgcX2NbW23YVSSR3aSnEf6fD1hsnDJh+ui2k\nQZDjGw0lUvly3DMhfmknhSp13jY26TrNXoAG4UikhfSFRKZeAcjI9vkCCNkMSe0p\n0wa2HolA/BDWnV9cM7j5v5KmrAACV2jU6ZjCuEhg1BuK8M1s3dsRnLspXbeja8g/\nQJVeNCMfcBNY1tFWQQycjCOp7i7nySOPWliLK1uJDW2LkIXQySHou3bIFykb1Lsh\nqiGu+shnAgMBAAECggEAUkvnz2j2g5M8T0arRqtaXuwQtFw8Gr3gHRFVbZAI9V5y\nNBFxnI6DSNuAsPo4RFhudaRtVw6I8ca+BFocqC/1HHUlfLnq8PdNNssggX0ogcXZ\nFg7FXyFrKOM22udgk3O8mgkoXVX87quoUoP1ED0GIQQPQW+UaA6Hy4cEupJ8EfzT\nn62qDuMkkhM6+FibUxzgl+ijJ+4bdDqf625DDiw1VJgzRU34+60sioBcoKJtFNov\nRxtql6DMrCtTgueCvBqWME9fW6FyCgnPpAEizyiS/Ag2nJ+wb/Pfp7K1z3MLFosc\nN3fXa8doMD7mjTUCED6UTNVHVia8ooyXV6fhQMHITQKBgQD2wm3Xczevb2QvlO7v\n3B8vnH+RYy5NnpUxRKE4msRW4DUao2e9PmhLX4x41uwc2Diu32YrlADI2iKZJEOa\nwql5qurV+sGop5wyQtFGgjdE42hgpXDj81FSrO3B31py8/BBatiqX0SSkveh6ARE\nGARyC3D2BkfwkLtaB6NK8NzdrQKBgQDQIPZTpJYY7UxXulCGxTlt8KtizAAyU3Ke\nq8w0BNu8qpG+S4lUr2DYCj0qIfRPUyEyOMpuh4qB8LkopHm72HcZj9Dl4cWfEu6n\nuROnWyJet3vUYeUHfEqHdUOmRNCuRx35XdWiT3f3PN9YOBRfzM5zmpn4D8Mq89KC\n4R6ttwIY4wKBgQCGvMmPcClC0PcKiC8jp7UboT+C2n4pAeODAG9r4g49RbWZcwot\nKkt2hJjGTsykP2hMDE3Uk78N7RYhOszzT0GM3sfVyVM/TS4bv6JX9rhJFEclJpEK\n1wxbsXMtflD8Hbjdb4MZHGXsBvXSYUcbC2Y6A4dNv0Y+1DiIw0zlmblwDQKBgD57\nltf3kmQ7YW747VH4hcw+s4U+j1SMft2p3+1CBCH45zZFAR6eZCmXsVMjzG/AGjg0\nmnliUa++8CeGcVF2pBLVfTZ2eFjQWzuZMZBNqNzcot1Y4mRD6TAPgVa6VBfuG86Q\nYCGRUAe2i6q1c1BrcRN9t3mkachMWMeYBBjM12FXAoGBANd7K9smH4zJJmNuSD5H\nPDBD0pXDi1cO6zWafx25fvNF8PVE+kus64zlOKJTkZ2GFLUdlG46yboVuW+VXxLk\nWLW4sENs02/sD2m/0DN16ViHbPMThXzMOGJXEjFheQiHjOBgP2po6i0xf9giM71m\ngbRciyezODEpxQ7gIRbSDDFO\n-----END PRIVATE KEY-----\n", "client_email": "bendrive-sa-3@bendrive-278010.iam.gserviceaccount.com", "client_id": "115959996184520585387", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bendrive-sa-3%40bendrive-278010.iam.gserviceaccount.com" },
    { "type": "service_account", "project_id": "bendrive-278010", "private_key_id": "f14b87c2d81cff6b305d967c5ff3fb3481df4865", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChs7uQ3uly76c8\nMyZqjsHlfAwKvo90EEBcbPk9xu17Evz2wkHH0txVbfy5fzFMDJvsHVgu3wMlOC1b\nQl9qRdHfyHZG8L79bsLO5vLC53Bncn72xxOUIwB83Ar5XXxNX/PZj/n43H7EPZzn\nFGzS8rCYeKr8U0TYCt9DzRKQZoXxkLXpZP+4UP2QusxrExgOuIrwbjP4E0sDRi3s\nnA6MN+EW3g2FPDQTR7Qa3ROEr2iap2Vld0ZAovzH1HdhmxhSDDFBPjwi08oYTRaX\n9HAk+Ql0WaP9FtSzulyBAGz6CwYPA03ePzWK/Ub55nmctd6IM2g42XXkPRqnEVhj\ndSTQEFq7AgMBAAECggEAA3WO26iJIfZSg40skzb+muQudcRh2T/HwLJsGpA44Fsl\nojnBon62S/WQZH9+FHxokYKHMml+7brn7X3cALABr2HgdeAMletaq4ZxRw4gb3YZ\nlTnpB1BAYGtsqK0BTb5xvwO/ez1sUNJomuDq+xBKCtj5/2/glyaUZCTs8r3eu64u\nHWmFKQiKYYGB2/qH6iWfXVgK2m/GfLXVe4cO6E18qI+8PuMrn+aSPFZnIICv/dGV\nzURmdQ5Vgo5/Z4soR177lYjaMnCRraCgiSk1a6VJMYLfef++TlMrJb2gTNCYB5l9\no4nzhOV+pSNN/j4mcka68MwMTJiNdIUJ9WYQQJxTIQKBgQDYP42iThG0OS+iGe83\nHyLp//RfUKrK2uzAzeTFYUdbqp2Ipmsb0OBKFIwe5Zz8PGPV95NlIHDaGqkOqhGO\nq3viD0Jl2uf85YravqDPoQ/Yc52syqH6gkvYHSn3OprjjFkjG0kuPqTpCEGz1u+Z\nPSLqFKeq7a47tLrE1XWDi0tSaQKBgQC/bUkzURqCTbQuywsQpv7ksE9urYBvRSQS\nqzdjlAsBNtyskAqzosdvVi1Ds+v85F3sZdGrirAGB17oht0zAOavgvoPYVg+AcRl\nJ4ZIWQ3sM3vgZVxUJ6reyq5IBKlQ2sOBH8t5FWGUm3elt976WdKNkNdj3HlQsODl\npKLvS/fXgwKBgHJF40qJhsF+FrXKjqbKRWDyaOiVcCuSVNnt8556MYM3PdggWSlx\nz5RWF1WccMC6COfg1Hr0Ea6vt/aP2IdUBzsGZUf9zenOQvolEkWmDwGK1x+gVMhU\nYk/p2WtUBNWKLPBoUtulLvAV9OJcCnEn5XNdRt0EjLXwY2HwixDgYwVBAoGAQUd2\nd/6HaLow4Ogy7MnWEIyjed3G96r/YzJqIBYjLpXT6TDxxVKUaj5cD0NzDXmfIfeS\n6cnQvy2SSv96vWLoSCAFQGt02ShnHgu9ejyMR+lCrEJEmxov5ev+ROb6Cm2f0A/U\npoUJEtF1mti6PGuXJtmm6hIMeNzoxMdBHROuABsCgYBPTdVM7RhwRpK19kl9rmg+\n/GctmjaADQWL1EMo5K5j65cQASb5fnG5gH3hlCTLEwtd0/PImI3UVvLMoPP09N3G\nB+6gT1LXtWmUqU0V8wfWzfOUKX2pXzXkwD2+6yY088mzN5I2v5fZh1CMgV54ecEV\np0Xye8dk7+8Qunj5+W3Txg==\n-----END PRIVATE KEY-----\n", "client_email": "bendrive-sa-4@bendrive-278010.iam.gserviceaccount.com", "client_id": "100858059701060905134", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bendrive-sa-4%40bendrive-278010.iam.gserviceaccount.com" },
    { "type": "service_account", "project_id": "bendrive-278010", "private_key_id": "bf696397a4a7c56eb05c687a471c88ca5956b802", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD73riI1vNOlkXL\nm84jcgPUaizbecm6ndpqPC9857SkSZOPWJhbXOejiEql9Nt1OQb64KbVG08k1HPl\nBTkgpNqMgirxwPRlF7YoSh9A6Agr9l7qqkcB8bOdLpP2C/fgpmCk6MuKr7JB84pK\ndWAKeJ4NRe26yApnZp6ttNxYXA6Gfhp7JBJi6BNQM5Hqv9xBY8l7M0DRWwF3sj3U\nkJRIsnrIBNFNBl7uZZ56SexMnpcLR4zGMfe6REZ3AnckYGh/W1IxaLKH1iAzEuIv\nKt65exrJvYG36L9KFeTQWS9XbCls1Rn0YcCQ8gH0cHTRgQZg9xGFNsB6sKUKMGXg\nfvUqMAMhAgMBAAECggEACUr0YAgePf4JYTPEbUZdoc6xDP/3U21Ti6vgzKj33z/f\ns+A+7tAEs+HpbyoTlsWd3k+/mAlD6EX2aLLCotOyRJDg6L6HxdsUG3RwpsJo2sZi\nRiI2MHoseFYpm2BhquY4lp0INXu6BfjoV0rxWjGNE0xLMyMCT0JYBGyx3Ii4+HlH\n3+hhTtEVUlvMnbX4crcgQ36TUp59L53OPVyx57pDUVr/ULo5BAB/YYG6/i1ncf0H\nvZj7AvvwF8eAEpsB5ljn0xoPOtDYwfsC6HV6/gFBGfhLnaM1pvozK13kBSGrqY14\nhPWZIkdyICoG59aqcXr8/wuQANaseDfE03mE12dqAQKBgQD/k9oNG8WkEYSU5vL2\nBpByeK3meSmiQ4dM7L4Ahi+keO5YgwvbZ888H3pR9wQO9MNFKzBHlqcFJ3aFatji\nzofJ9qDTq9VhxnYES1G/4D5VxKiNo0Tc36IgrmUr1KYpFK7AHICqMhP+u7WauvUu\n0La58F4zSSybDIr2Tf429ima8QKBgQD8SUzbOcDOKnL2FEEhciLaOejJYmBmZFc2\nBcqbwuqxgXMlLcJtsTMkGeY06w3CzkLhDehtBQW+RTbWnDG2P6tISCIJ9naE9Cd3\nP+qKrnBRfTSMHu2loAoW+Iz1bWuAiE7JYzH21WIZSM5uUvBkJZeH2xYO82caaZxu\nl/jE4aELMQKBgBwx9XZIwA8Pl67No7QcmUbnpVetujgadwy3eWaZZxwf8zt0iZRU\n6XnahyYPuDTmL7yrvRHIvvhEmECzvuWWn0hamvd/F3VH7bEflg8y7+2KWoX1ox0y\n1rIAS00AkqwpifXLry4XhDkwACLnyTC2+dGdgObrha49Pf9aL1dk5MYhAoGBAIsE\nlS5EL8MrTvfch1s3uo7H1EeMRxSE/C2PmWqlSJARhfKZuYaaW1TsVJcaYxXSdLXw\n5P+WAekr2KD/psEHaonE/cTBo+N1an3ioYpTvx6YQKlprYhTnNu1kG75IYDNG6UL\nXQ/n20uVe/L9DuwQbuR0zD3m0AyU35dtdK6Aqi4xAoGBAMKXydE2xOBH+r07EYgj\ni4znSnOEua0nI1wPYTv2w7XkZXwY57WeONl/yPKVY1gV4ezseMFYFQtFIxauidkR\nCotmTUPnVkZi0tGbNM+6ieDQKaJW+fMGGCBYqetW/qkqTV/avShRexP+dRMCGt2D\nZ2j+24sUJ/iMRoADcFIMf4rW\n-----END PRIVATE KEY-----\n", "client_email": "bendrive-sa-5@bendrive-278010.iam.gserviceaccount.com", "client_id": "105544219102844002686", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bendrive-sa-5%40bendrive-278010.iam.gserviceaccount.com" }
];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)];

const authConfig = {
    "siteName": "Bendrive XD ʙᴇᴛᴀ", // Website name
    "client_id": "58094879805-4654k2k5nqdid5bavft7fvea5u9po0t1.apps.googleusercontent.com", // Client id from Google Cloud Console
    "client_secret": "ZNPZ-vS6N9Zjsyb_sNMZmXHL", // Client Secret from Google Cloud Console
    "refresh_token": "1//0gzl2Nd0vxubiCgYIARAAGBASNwF-L9IrhiJ0ic2pzMuZz7nIreLPUsPsP3vw3Kr5UCrdDUoBfisKM-F69TBgzNx01qNqO32i3I0", // Authorize token
    "service_account": true, // true if you're using Service Account instead of user account
    "service_account_json": randomserviceaccount, // appropriate values for SA, more in ReadMe file
    "files_list_page_size": 50,
    "search_result_list_page_size": 50,
    "enable_cors_file_down": false,
    "enable_password_file_verify": true,
    "roots":[
        {
            "id": "0AMaP24k2GL5oUk9PVA",
            "name": "server 3",
            "protect_file_link": true,
           // "auth": {"username":"password"} // Remove double slash before "auth" to activate id password protection
        },
    ]};
const uiConfig = {
    "theme": "dark", // switch between themes, default set to dark, select from https://github.com/ParveenBhadooOfficial/Google-Drive-Index#themes
    "version": "2.0.1", // don't touch this one. get latest code using generator at https://generator.driveindex.ga
    // If you're using Image then set to true, If you want text then set it to false
    "logo_image": false, // true if you're using image link in next option.
    "logo_height": "", // only if logo_image is true
    "logo_width": "100px", // only if logo_image is true
    // if logo is true then link otherwise just text for name
    "logo_link_name": "Bendrive XD ᵇᵉᵗᵃ",
    "fixed_header": false, // If you want the header to be flexible or fixed.
    "contact_link": "https://t.me/BenTennyson_xDBot", // Link to Contact Button on Menu
    "copyright_year": "2021", // year of copyright, can be anything like 2015 - 2020 or just 2020
    "company_name": "Bendrive XD", // Name next to copyright
    "company_link": "https://t.me/BenTennyson_xDBot", // link of copyright name
    "credit": true, // Set this to true to give us credit
    "display_size": true, // Set this to false to hide display file size
    "display_time": false, // Set this to false to hide display modified time for folder and files
    "disable_player": false, // Set this to true to hide audio and video players
    "poster": "https://cdn.jsdelivr.net/gh/swapnilg4u/bendriveindex@2.0.0/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
    "audioposter": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@2.0.0/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/gh/swapnilg4u/bendriveindex", // If Project is Forked, then enter your Github repo
    "render_head_md": true, // Render Head.md
    "render_readme_md": true, // Render Readme.md
    "display_drive_link": false, // This will add a Link Button to Google Drive of that particular file.
    "plyr_io_version": "3.6.4", // Change plyr.io version in future when needed.
    "unauthorized_owner_link": "https://t.me/BenTennyson_xDBot", // Unauthorized Error Page Link to Owner
    "unauthorized_owner_email": "admin@bendrive.gq", // Unauthorized Error Page Owner Email
    "enable_arc": true, // If you want to use arc.io
    "arc_code": "tHMoHYyJ" // arc.io Integraion Code, get yours from https://portal.arc.io
};

const FUNCS = {
    formatSearchKeyword: function(keyword) {
        let nothing = "";
        let space = " ";
        if (!keyword) return nothing;
        return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
            .replace(/[,，|(){}]/g, space)
            .trim()
    }

};

const CONSTS = new(class {
    default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
    gd_root_type = {
        user_drive: 0,
        share_drive: 1,
        sub_folder: 2
    };
    folder_mime_type = 'application/vnd.google-apps.folder';
})();

const JWT = {
  header: {
    alg: 'RS256',
    typ: 'JWT'
  },
  importKey: async function(pemKey) {
    var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
    return crypto.subtle.importKey('pkcs8', pemDER, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
  },
  createSignature: async function(text, key) {
    const textBuffer = this.textUtils.stringToArrayBuffer(text);
    return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
  },
  generateGCPToken: async function(serviceAccount) {
    const iat = parseInt(Date.now()/1000);
    var payload = {
      "iss": serviceAccount.client_email,
      "scope": "https://www.googleapis.com/auth/drive",
      "aud": "https://oauth2.googleapis.com/token",
      "exp": iat+3600,
      "iat": iat
    };
    const encPayload = btoa(JSON.stringify(payload));
    const encHeader = btoa(JSON.stringify(this.header));
    var key = await this.importKey(serviceAccount.private_key);
    var signed = await this.createSignature(encHeader+"."+encPayload, key);
    return encHeader+"."+encPayload+"."+this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
  },
  textUtils: {
    base64ToArrayBuffer: function(base64) {
      var binary_string = atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    },
    stringToArrayBuffer: function(str){
      var len = str.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = str.charCodeAt(i);
      }
      return bytes.buffer;
    },
    arrayBufferToBase64: function(buffer) {
      let binary = '';
      let bytes = new Uint8Array(buffer);
      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    }
  }
};
var gds = [];

function html(current_drive_order = 0, model = {}) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  ${uiConfig.enable_arc ? '<script async src="https://arc.io/widget.min.js#': '<!--'}${uiConfig.arc_code}${uiConfig.enable_arc ? '"></script>': '-->'}
  <meta name="robots" content="noindex" />
  <link rel="icon" href="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/images/favicon.ico">
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  </script>
  <link rel="stylesheet" href="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/css/style.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.css" />
  <link rel="stylesheet" href="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/css/bootstrap/${uiConfig.theme}/bootstrap.min.css">
  <style>${uiConfig.display_size ? '' : '.csize{display:none;}'}${uiConfig.display_time ? '' : '.cmtime{display:none;}'}</style>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/js/app.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/mozilla/pdf.js@gh-pages/build/pdf.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
</body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.polyfilled.js"></script>
</html>`;
};

const unauthorized = `<html>
<head><title>401 Unauthorized</title></head>
<body>
<center><h1>401 Unauthorized</h1></center>
<hr><center>nginx/1.18.0</center>
<center>Please contact <a href="${uiConfig.unauthorized_owner_link}">Site Owner</a> at ${uiConfig.unauthorized_owner_email}</center>
</body>
</html>`

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    if (gds.length === 0) {
        for (let i = 0; i < authConfig.roots.length; i++) {
            const gd = new googleDrive(authConfig, i);
            await gd.init();
            gds.push(gd)
        }
        let tasks = [];
        gds.forEach(gd => {
            tasks.push(gd.initRootType());
        });
        for (let task of tasks) {
            await task;
        }
    }

    let gd;
    let url = new URL(request.url);
    let path = url.pathname;

    function redirectToIndexPage() {
        return new Response('', {
            status: 301,
            headers: {
                'Location': `${url.origin}/0:/`
            }
        });
    }

    if (path == '/') return redirectToIndexPage();
    if (path.toLowerCase() == '/arc-sw.js'){
        return fetch("https://arc.io/arc-sw.js")
    }
    else if (path.toLowerCase() == '/admin') {
        return Response.redirect("https://bit.ly/3sAxYwr", 301)
    }
    else if (path.toLowerCase() == '/update') {
        return Response.redirect("https://generator.driveindex.ga", 301)
    }

    const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
    const match = command_reg.exec(path);
    if (match) {
        const num = match.groups.num;
        const order = Number(num);
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
        for (const r = gd.basicAuthResponse(request); r;) return r;
        const command = match.groups.command;
        if (command === 'search') {
            if (request.method === 'POST') {
                return handleSearch(request, gd);
            } else {
                const params = url.searchParams;
                return new Response(html(gd.order, {
                    q: params.get("q") || '',
                    is_search_page: true,
                    root_type: gd.root_type
                }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    }
                });
            }
        } else if (command === 'id2path' && request.method === 'POST') {
            return handleId2Path(request, gd)
        }
    }

    const common_reg = /^\/\d+:\/.*$/g;
    try {
        if (!path.match(common_reg)) {
            return redirectToIndexPage();
        }
        let split = path.split("/");
        let order = Number(split[1].slice(0, -1));
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
    } catch (e) {
        return redirectToIndexPage()
    }

    const basic_auth_res = gd.basicAuthResponse(request);

    path = path.replace(gd.url_path_prefix, '') || '/';
    if (request.method == 'POST') {
        return basic_auth_res || apiRequest(request, gd);
    }

    let action = url.searchParams.get('a');

    if (path.substr(-1) == '/' || action != null) {
        return basic_auth_res || new Response(html(gd.order, {
            root_type: gd.root_type
        }), {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    } else {
        if (path.split('/').pop().toLowerCase() == ".password") {
            return basic_auth_res || new Response("", {
                status: 404
            });
        }
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        const inline_down = 'true' === url.searchParams.get('inline');
        if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
        return gd.down(file.id, range, inline_down);
    }
}


async function apiRequest(request, gd) {
    let url = new URL(request.url);
    let path = url.pathname;
    path = path.replace(gd.url_path_prefix, '') || '/';

    let option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }

    if (path.substr(-1) == '/') {
        let form = await request.formData();
        let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

        if (authConfig['enable_password_file_verify']) {
            let password = await gd.password(path);
            // console.log("dir password", password);
            if (password && password.replace("\n", "") !== form.get('password')) {
                let html = `{"error": {"code": 401,"message": "password error."}}`;
                return new Response(html, option);
            }
        }

        let list_result = await deferred_list_result;
        return new Response(JSON.stringify(list_result), option);
    } else {
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        return new Response(JSON.stringify(file));
    }
}

async function handleSearch(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
    return new Response(JSON.stringify(search_result), option);
}

async function handleId2Path(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let path = await gd.findPathById(form.get('id'));
    return new Response(path || '', option);
}

class googleDrive {
    constructor(authConfig, order) {
        this.order = order;
        this.root = authConfig.roots[order];
        this.root.protect_file_link = this.root.protect_file_link || false;
        this.url_path_prefix = `/${order}:`;
        this.authConfig = authConfig;
        this.paths = [];
        this.files = [];
        this.passwords = [];
        this.id_path_cache = {};
        this.id_path_cache[this.root['id']] = '/';
        this.paths["/"] = this.root['id'];
    }
    async init() {
        await this.accessToken();
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    }

    async initRootType() {
        const root_id = this.root['id'];
        const types = CONSTS.gd_root_type;
        if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
            this.root_type = types.user_drive;
        } else {
            const obj = await this.getShareDriveObjById(root_id);
            this.root_type = obj ? types.share_drive : types.sub_folder;
        }
    }

    basicAuthResponse(request) {
        const auth = this.root.auth || '',
          _401 = new Response(unauthorized, {
                headers: {
                    'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`,
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
        if (auth) {
            const _auth = request.headers.get('Authorization')
            if (_auth) {
               const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
                if (auth.hasOwnProperty(received_user)) {
                    if (auth[received_user] == received_pass) {
                    return null;
                    } else return _401;
                } else return _401;
            }
        } else return null;
        return _401;
    }

    async down(id, range = '', inline = false) {
        let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
        let requestOption = await this.requestOption();
        requestOption.headers['Range'] = range;
        let res = await fetch(url, requestOption);
        if (res.ok) {
          const {
            headers
          } = res = new Response(res.body, res)
          this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
          inline === true && headers.set('Content-Disposition', 'inline');
          return res;
        } else {
          const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/DownloadError.html`);
          return new Response(await res.text(), {
            headers: {
              "content-type": "text/html;charset=UTF-8",
            },
          })
        }
    }

    async file(path) {
        if (typeof this.files[path] == 'undefined') {
            this.files[path] = await this._file(path);
        }
        return this.files[path];
    }

    async _file(path) {
        let arr = path.split('/');
        let name = arr.pop();
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        let dir = arr.join('/') + '/';
        // console.log(name, dir);
        let parent = await this.findPathId(dir);
        // console.log(parent);
        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and name = '${name}' and trashed = false`;
        params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        // console.log(obj);
        return obj.files[0];
    }

    async list(path, page_token = null, page_index = 0) {
        if (this.path_children_cache == undefined) {
            // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
            this.path_children_cache = {};
        }

        if (this.path_children_cache[path] &&
            this.path_children_cache[path][page_index] &&
            this.path_children_cache[path][page_index].data
        ) {
            let child_obj = this.path_children_cache[path][page_index];
            return {
                nextPageToken: child_obj.nextPageToken || null,
                curPageIndex: page_index,
                data: child_obj.data
            };
        }

        let id = await this.findPathId(path);
        let result = await this._ls(id, page_token, page_index);
        let data = result.data;
        if (result.nextPageToken && data.files) {
            if (!Array.isArray(this.path_children_cache[path])) {
                this.path_children_cache[path] = []
            }
            this.path_children_cache[path][Number(result.curPageIndex)] = {
                nextPageToken: result.nextPageToken,
                data: data
            };
        }

        return result
    }


    async _ls(parent, page_token = null, page_index = 0) {

        if (parent == undefined) {
            return null;
        }
        let obj;
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and trashed = false AND name !='.password'`;
        params.orderBy = 'folder,name,modifiedTime desc';
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.files_list_page_size;

        if (page_token) {
            params.pageToken = page_token;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();

        return {
            nextPageToken: obj.nextPageToken || null,
            curPageIndex: page_index,
            data: obj
        };
    }

    async password(path) {
        if (this.passwords[path] !== undefined) {
            return this.passwords[path];
        }

        let file = await this.file(path + '.password');
        if (file == undefined) {
            this.passwords[path] = null;
        } else {
            let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
            let requestOption = await this.requestOption();
            let response = await this.fetch200(url, requestOption);
            this.passwords[path] = await response.text();
        }

        return this.passwords[path];
    }

    async getShareDriveObjById(any_id) {
        if (!any_id) return null;
        if ('string' !== typeof any_id) return null;

        let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        let obj = await res.json();
        if (obj && obj.id) return obj;

        return null
    }

    async search(origin_keyword, page_token = null, page_index = 0) {
        const types = CONSTS.gd_root_type;
        const is_user_drive = this.root_type === types.user_drive;
        const is_share_drive = this.root_type === types.share_drive;

        const empty_result = {
            nextPageToken: null,
            curPageIndex: page_index,
            data: null
        };

        if (!is_user_drive && !is_share_drive) {
            return empty_result;
        }
        let keyword = FUNCS.formatSearchKeyword(origin_keyword);
        if (!keyword) {
            return empty_result;
        }
        let words = keyword.split(/\s+/);
        let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
        let params = {};
        if (is_user_drive) {
            params.corpora = 'user'
        }
        if (is_share_drive) {
            params.corpora = 'drive';
            params.driveId = this.root.id;
            params.includeItemsFromAllDrives = true;
            params.supportsAllDrives = true;
        }
        if (page_token) {
            params.pageToken = page_token;
        }
        params.q = `trashed = false AND name !='.password' AND (${name_search_str})`;
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.search_result_list_page_size;
        params.orderBy = 'folder,name,modifiedTime desc';

        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let res_obj = await response.json();

        return {
            nextPageToken: res_obj.nextPageToken || null,
            curPageIndex: page_index,
            data: res_obj
        };
    }
    
    async findParentFilesRecursion(child_id, contain_myself = true) {
        const gd = this;
        const gd_root_id = gd.root.id;
        const user_drive_real_root_id = authConfig.user_drive_real_root_id;
        const is_user_drive = gd.root_type === CONSTS.gd_root_type.user_drive;
        const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
        const fields = CONSTS.default_file_fields;
        const parent_files = [];
        let meet_top = false;

        async function addItsFirstParent(file_obj) {
            if (!file_obj) return;
            if (!file_obj.parents) return;
            if (file_obj.parents.length < 1) return;
            let p_ids = file_obj.parents;
            if (p_ids && p_ids.length > 0) {
                const first_p_id = p_ids[0];
                if (first_p_id === target_top_id) {
                    meet_top = true;
                    return;
                }
                const p_file_obj = await gd.findItemById(first_p_id);
                if (p_file_obj && p_file_obj.id) {
                    parent_files.push(p_file_obj);
                    await addItsFirstParent(p_file_obj);
                }
            }
        }

        const child_obj = await gd.findItemById(child_id);
        if (contain_myself) {
            parent_files.push(child_obj);
        }
        await addItsFirstParent(child_obj);

        return meet_top ? parent_files : null
    }

    async findPathById(child_id) {
        if (this.id_path_cache[child_id]) {
            return this.id_path_cache[child_id];
        }

        const p_files = await this.findParentFilesRecursion(child_id);
        if (!p_files || p_files.length < 1) return '';

        let cache = [];
        // Cache the path and id of each level found
        p_files.forEach((value, idx) => {
            const is_folder = idx === 0 ? (p_files[idx].mimeType === CONSTS.folder_mime_type) : true;
            let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
            if (is_folder) path += '/';
            cache.push({
                id: p_files[idx].id,
                path: path
            })
        });

        cache.forEach((obj) => {
            this.id_path_cache[obj.id] = obj.path;
            this.paths[obj.path] = obj.id
        });
        return cache[0].path;
    }

    async findItemById(id) {
        const is_user_drive = this.root_type === CONSTS.gd_root_type.user_drive;
        let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${CONSTS.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        return await res.json()
    }

    async findPathId(path) {
        let c_path = '/';
        let c_id = this.paths[c_path];

        let arr = path.trim('/').split('/');
        for (let name of arr) {
            c_path += name + '/';

            if (typeof this.paths[c_path] == 'undefined') {
                let id = await this._findDirId(c_id, name);
                this.paths[c_path] = id;
            }

            c_id = this.paths[c_path];
            if (c_id == undefined || c_id == null) {
                break;
            }
        }
        return this.paths[path];
    }

    async _findDirId(parent, name) {
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        if (parent == undefined) {
            return null;
        }

        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
        params.fields = "nextPageToken, files(id, name, mimeType)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        if (obj.files[0] == undefined) {
            return null;
        }
        return obj.files[0].id;
    }

    async accessToken() {
        console.log("accessToken");
        if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
            const obj = await this.fetchAccessToken();
            if (obj.access_token != undefined) {
                this.authConfig.accessToken = obj.access_token;
                this.authConfig.expires = Date.now() + 3500 * 1000;
            }
        }
        return this.authConfig.accessToken;
    }

    async fetchAccessToken() {
        console.log("fetchAccessToken");
        const url = "https://www.googleapis.com/oauth2/v4/token";
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var post_data;
        if(this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined")
        {
        const jwttoken = await JWT.generateGCPToken(this.authConfig.service_account_json);
        post_data = {
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwttoken,
        };
        } else {
        post_data = {
            client_id: this.authConfig.client_id,
            client_secret: this.authConfig.client_secret,
            refresh_token: this.authConfig.refresh_token,
            grant_type: "refresh_token",
        };
        }

        let requestOption = {
            'method': 'POST',
            'headers': headers,
            'body': this.enQuery(post_data)
        };

        const response = await fetch(url, requestOption);
        return await response.json();
    }

    async fetch200(url, requestOption) {
        let response;
        for (let i = 0; i < 3; i++) {
            response = await fetch(url, requestOption);
            console.log(response.status);
            if (response.status != 403) {
                break;
            }
            await this.sleep(800 * (i + 1));
        }
        return response;
    }

    async requestOption(headers = {}, method = 'GET') {
        const accessToken = await this.accessToken();
        headers['authorization'] = 'Bearer ' + accessToken;
        return {
            'method': method,
            'headers': headers
        };
    }

    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
    }

    sleep(ms) {
        return new Promise(function(resolve, reject) {
            let i = 0;
            setTimeout(function() {
                console.log('sleep' + ms);
                i++;
                if (i >= 2) reject(new Error('i>=2'));
                else resolve(i);
            }, ms);
        })
    }
}

String.prototype.trim = function(char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};
