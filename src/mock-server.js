import {Response, Server} from "miragejs"
// Create a new server instance - Intercepts the requests
if (process.env.NODE_ENV === "development") {
    const server = new Server({
        urlPrefix: "http://localhost:3000/",
        namespace: "",
        routes() {
            
          this.get("/contracts/:id/paragraphs", (schema, request) => {
            let page = request.queryParams.page;
            switch (page) {
                case "1":
                    return new Response(200, {"Content-Type":  "application/json"}, {
                        "data": {
                          "type": "contract-paragraphs",
                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                          "attributes": {
                            "text": "Paragraph 1 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat"
                          }
                        },
                        "pagination": {
                          "count": "15000",
                          "page": "1",
                          "pages": "300",
                          "pageSize": "50"
                        }
                      });
                case "2":
                    return new Response(200, {"Content-Type":  "application/json"}, {
                        "data": {
                          "type": "contract-paragraphs",
                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                          "attributes": {
                            "text": "Paragraph 2 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid"
                          }
                        },
                        "pagination": {
                          "count": "15000",
                          "page": "2",
                          "pages": "300",
                          "pageSize": "50"
                        }
                      });
                case "3":
                    return new Response(200, {"Content-Type":  "application/json"}, {
                        "data": {
                          "type": "contract-paragraphs",
                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                          "attributes": {
                            "text": "Paragraph 3 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat"
                          }
                        },
                        "pagination": {
                          "count": "15000",
                          "page": "3",
                          "pages": "300",
                          "pageSize": "50"
                        }
                      });
                case "4":
                    return new Response(200, {"Content-Type":  "application/json"}, {
                        "data": {
                          "type": "contract-paragraphs",
                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                          "attributes": {
                            "text": "Paragraph 4 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat"
                          }
                        },
                        "pagination": {
                          "count": "15000",
                          "page": "4",
                          "pages": "300",
                          "pageSize": "50"
                        }
                      });
                case "5":
                    return new Response(200, {"Content-Type":  "application/json"}, {
                        "data": {
                          "type": "contract-paragraphs",
                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                          "attributes": {
                            "text": "Paragraph 5 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea " 
                          }
                        },
                        "pagination": {
                          "count": "15000",
                          "page": "5",
                          "pages": "300",
                          "pageSize": "50"
                        }
                      });
                      case "6":
                        return new Response(200, {"Content-Type":  "application/json"}, {
                            "data": {
                              "type": "contract-paragraphs",
                              "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                              "attributes": {
                                "text": "Paragraph 6 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed "
                              }
                            },
                            "pagination": {
                              "count": "15000",
                              "page": "6",
                              "pages": "300",
                              "pageSize": "50"
                            }
                          });
                          case "7":
                            return new Response(200, {"Content-Type":  "application/json"}, {
                                "data": {
                                  "type": "contract-paragraphs",
                                  "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                  "attributes": {
                                    "text": "Paragraph 7 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea "
                                  }
                                },
                                "pagination": {
                                  "count": "15000",
                                  "page": "7",
                                  "pages": "300",
                                  "pageSize": "50"
                                }
                              });
                              case "8":
                                return new Response(200, {"Content-Type":  "application/json"}, {
                                    "data": {
                                      "type": "contract-paragraphs",
                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                      "attributes": {
                                        "text": "Paragraph 8 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor "
                                      }
                                    },
                                    "pagination": {
                                      "count": "15000",
                                      "page": "8",
                                      "pages": "300",
                                      "pageSize": "50"
                                    }
                                  });
                                  case "9":
                                    return new Response(200, {"Content-Type":  "application/json"}, {
                                        "data": {
                                          "type": "contract-paragraphs",
                                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                          "attributes": {
                                            "text": "Paragraph 9 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,"
                                          }
                                        },
                                        "pagination": {
                                          "count": "15000",
                                          "page": "9",
                                          "pages": "300",
                                          "pageSize": "50"
                                        }
                                      });
                                      case "10":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                        "data": {
                                          "type": "contract-paragraphs",
                                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                          "attributes": {
                                            "text": "Paragraph 10 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris ,"
                                          }
                                        },
                                        "pagination": {
                                          "count": "15000",
                                          "page": "10",
                                          "pages": "300",
                                          "pageSize": "50"
                                        }
                                      });
                                      case "11":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                    "data": {
                                      "type": "contract-paragraphs",
                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                      "attributes": {
                                        "text": "Paragraph 11 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor "
                                      }
                                    },
                                    "pagination": {
                                      "count": "15000",
                                      "page": "11",
                                      "pages": "300",
                                      "pageSize": "50"
                                    }
                                  });

                                  case "12":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                    "data": {
                                      "type": "contract-paragraphs",
                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                      "attributes": {
                                        "text": "Paragraph 12 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea "
                                      }
                                    },
                                    "pagination": {
                                      "count": "15000",
                                      "page": "12",
                                      "pages": "300",
                                      "pageSize": "50"
                                    }
                                  });
                                  case "13":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                    "data": {
                                      "type": "contract-paragraphs",
                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                      "attributes": {
                                        "text": "Paragraph 13 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea."
                                      }
                                    },
                                    "pagination": {
                                      "count": "15000",
                                      "page": "13",
                                      "pages": "300",
                                      "pageSize": "50"
                                    }
                                  });
                                  case "14":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                    "data": {
                                      "type": "contract-paragraphs",
                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                      "attributes": {
                                        "text": "Paragraph 14- Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea."
                                      }
                                    },
                                    "pagination": {
                                      "count": "15000",
                                      "page": "14",
                                      "pages": "300",
                                      "pageSize": "50"
                                    }
                                  });
                                  case "15":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                    "data": {
                                      "type": "contract-paragraphs",
                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                      "attributes": {
                                        "text": "Paragraph 15 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea."
                                      }
                                    },
                                    "pagination": {
                                      "count": "15000",
                                      "page": "15",
                                      "pages": "300",
                                      "pageSize": "50"
                                    }
                                  });
                                  case "16":
                                    return new Response(200, {"Content-Type":  "application/json"}, {
                                        "data": {
                                          "type": "contract-paragraphs",
                                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                          "attributes": {
                                            "text": "Paragraph 16 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat"
                                          }
                                        },
                                        "pagination": {
                                          "count": "15000",
                                          "page": "16",
                                          "pages": "300",
                                          "pageSize": "50"
                                        }
                                      });
                                      case "17":
                                    return new Response(200, {"Content-Type":  "application/json"}, {
                                        "data": {
                                          "type": "contract-paragraphs",
                                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                          "attributes": {
                                            "text": "Paragraph 17 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea " 
                                          }
                                        },
                                        "pagination": {
                                          "count": "15000",
                                          "page": "17",
                                          "pages": "300",
                                          "pageSize": "50"
                                        }
                                      });
                                      case "18":
                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                            "data": {
                                              "type": "contract-paragraphs",
                                              "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                              "attributes": {
                                                "text": "Paragraph 18 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed "
                                              }
                                            },
                                            "pagination": {
                                              "count": "15000",
                                              "page": "18",
                                              "pages": "300",
                                              "pageSize": "50"
                                            }
                                          });
                                          case "19":
                                            return new Response(200, {"Content-Type":  "application/json"}, {
                                                "data": {
                                                  "type": "contract-paragraphs",
                                                  "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                  "attributes": {
                                                    "text": "Paragraph 19 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea "
                                                  }
                                                },
                                                "pagination": {
                                                  "count": "15000",
                                                  "page": "19",
                                                  "pages": "300",
                                                  "pageSize": "50"
                                                }
                                              });
                                              case "20":
                                                return new Response(200, {"Content-Type":  "application/json"}, {
                                                    "data": {
                                                      "type": "contract-paragraphs",
                                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                      "attributes": {
                                                        "text": "Paragraph 20 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor "
                                                      }
                                                    },
                                                    "pagination": {
                                                      "count": "15000",
                                                      "page": "20",
                                                      "pages": "300",
                                                      "pageSize": "50"
                                                    }
                                                  });
                                                  case "21":
                                                    return new Response(200, {"Content-Type":  "application/json"}, {
                                                        "data": {
                                                          "type": "contract-paragraphs",
                                                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                          "attributes": {
                                                            "text": "Paragraph 21 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,"
                                                          }
                                                        },
                                                        "pagination": {
                                                          "count": "15000",
                                                          "page": "21",
                                                          "pages": "300",
                                                          "pageSize": "50"
                                                        }
                                                      });
                                                      case "22":
                                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                                        "data": {
                                                          "type": "contract-paragraphs",
                                                          "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                          "attributes": {
                                                            "text": "Paragraph 22 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris ,"
                                                          }
                                                        },
                                                        "pagination": {
                                                          "count": "15000",
                                                          "page": "22",
                                                          "pages": "300",
                                                          "pageSize": "50"
                                                        }
                                                      });
                                                      case "23":
                                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                                    "data": {
                                                      "type": "contract-paragraphs",
                                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                      "attributes": {
                                                        "text": "Paragraph 23 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequatLorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor "
                                                      }
                                                    },
                                                    "pagination": {
                                                      "count": "15000",
                                                      "page": "23",
                                                      "pages": "300",
                                                      "pageSize": "50"
                                                    }
                                                  });

                                                  case "24":
                                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                                    "data": {
                                                      "type": "contract-paragraphs",
                                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                      "attributes": {
                                                        "text": "Paragraph 24 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea "
                                                      }
                                                    },
                                                    "pagination": {
                                                      "count": "15000",
                                                      "page": "24",
                                                      "pages": "300",
                                                      "pageSize": "50"
                                                    }
                                                  });
                                                  case "25":
                                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                                    "data": {
                                                      "type": "contract-paragraphs",
                                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                      "attributes": {
                                                        "text": "Paragraph 25 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea."
                                                      }
                                                    },
                                                    "pagination": {
                                                      "count": "15000",
                                                      "page": "25",
                                                      "pages": "300",
                                                      "pageSize": "50"
                                                    }
                                                  });
                                                  case "26":
                                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                                    "data": {
                                                      "type": "contract-paragraphs",
                                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                      "attributes": {
                                                        "text": "Paragraph 26 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea."
                                                      }
                                                    },
                                                    "pagination": {
                                                      "count": "15000",
                                                      "page": "26",
                                                      "pages": "300",
                                                      "pageSize": "50"
                                                    }
                                                  });
                                                  case "27":
                                                        return new Response(200, {"Content-Type":  "application/json"}, {
                                                    "data": {
                                                      "type": "contract-paragraphs",
                                                      "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
                                                      "attributes": {
                                                        "text": "Paragraph 27 - Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea.Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat Lorem ipsum dolor sit amet,consectetur adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolor magna aliqua Utenim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea."
                                                      }
                                                    },
                                                    "pagination": {
                                                      "count": "15000",
                                                      "page": "27",
                                                      "pages": "300",
                                                      "pageSize": "50"
                                                    }
                                                  });

                default:return new Response(404, {"Content-Type":  "application/json"}, {
                                "error": "No data found"
                                }
                              );;  
                                
            }
        });
        this.get("/contracts/:id", (schema, request) => {
            let {id} = request.params;
            switch (id) {
                case "dc89ff49-8449-11e7-ac1d-3c52820efd20":
                    return new Response(200, {"Content-Type":  "application/json"}, {
                        "data": {
                                    "type":"contracts",
                                    "id":"dc89ff49-8449-11e7-ac1d-3c52820efd20",
                                    "attributes": {
                                        "name": "Contract Name"
                                    }
                                },
                                "relationships": {
                                    "paragraphs": {
                                        "links": {"self": "/contracts/dc89ff49-8449-11e7-ac1d-3c52820efd20/paragraphs"}
                        } }
                        }
                        );
                default: break;    
            }
        });
        },
    });
server.passthrough();
}