/*

+────────┌────────┌──────────┌────────────────┌──────────────+
|USER_ID |COMP_ID |USER_NAME |USER_FIRST_NAME |USER_JOIN_DATE|
+────────└────────└──────────└────────────────└──────────────+
USER_ID             INT             PRIMARY KEY,
COMP_ID             INT             FOREIGN KEY REFERENCES COMPANY(COMP_ID),
USER_NAME           VARCHAR(100)    NOT NULL,
USER_FIRST_NAME     VARCHAR(100)    NOT NULL,
USER_JOIN_DATE      DATETIME        DEFAULT CURRENT_TIMESTAMP


*/