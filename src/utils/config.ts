interface Config {
    servicId :string,
    templateId:string,
    publicKey:string,
}


export const config:Config = {
    servicId:process.env.NEXT_PUBLIC_EMAIL_SERVIC_ID ||'',
    templateId:process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ||'',
    publicKey:process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ||''
}