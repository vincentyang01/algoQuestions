/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains, prev = []) {
    let visitCounts = {}
    
    for(let i = 0; i < cpdomains.length; i++){
        const [visits, domain] = cpdomains[i].split(' ')
        let subdomains = domain.split('.')
    
        while(subdomains.length) {
            let subdomain = subdomains.join('.');
            visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
                Number(visitCounts[subdomain]) + Number(visits) :
                visits;
            subdomains.shift();
        }

    }
    return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);

};